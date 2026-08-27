import SwiftUI
import DivKit

/**
 PROTOTYPE вертикального среза: экран каталога, layout приходит с Go-сервера.

 PROTOTYPE-упрощение: сетевой слой здесь — URLSession, KMP-фреймворк shared
 в срез не вшит (сборка XCFramework + интеграция в Xcode — отдельный шаг,
 см. тикет вертикального среза). Сам DivKit-JSON тот же, что рендерят
 Android и веб-кабинет.
 */
struct ContentView: View {
    @State private var layoutJson: [String: Any]?
    @State private var errorText: String?

    var body: some View {
        Group {
            if let layoutJson {
                DivKitScreen(json: layoutJson)
            } else if let errorText {
                Text(errorText)
                    .padding()
            } else {
                Text("Загрузка…").padding()
            }
        }
        .task { await loadLayout() }
    }

    private func loadLayout() async {
        let base = ProcessInfo.processInfo.environment["ARENA_API_BASE"] ?? "http://localhost:8090"
        guard let url = URL(string: "\(base)/api/v1/layout/catalog") else { return }
        do {
            let (data, _) = try await URLSession.shared.data(from: url)
            layoutJson = try JSONSerialization.jsonObject(with: data) as? [String: Any]
        } catch {
            errorText = "Не удалось загрузить каталог: \(error.localizedDescription)"
        }
    }
}

struct DivKitScreen: UIViewRepresentable {
    let json: [String: Any]

    func makeUIView(context: Context) -> DivView {
        DivView(divKitComponents: DivKitComponents())
    }

    func updateUIView(_ uiView: DivView, context: Context) {
        guard context.coordinator.needsUpdate else { return }
        context.coordinator.needsUpdate = false
        Task {
            await uiView.setSource(
                DivViewSource(kind: .json(json), cardId: "catalog")
            )
        }
    }

    func makeCoordinator() -> Coordinator { Coordinator() }

    final class Coordinator {
        var needsUpdate = true
    }
}
