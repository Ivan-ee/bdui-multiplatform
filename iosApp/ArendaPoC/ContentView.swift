import SwiftUI
import DivKit

private let baseURL = ProcessInfo.processInfo.environment["ARENA_API_BASE"] ?? "http://localhost:8090"

/**
 * Экраны прототипа. Каждый — серверный DivKit-layout; клиент хранит только
 * «какой экран открыт» и обрабатывает навигационные действия custom://.
 */
enum Screen: Equatable {
    case catalog
    case object(String)
    case pay(String)
    case paying(String, Int)
    case myPayments

    init(url: String) {
        guard url.hasPrefix("custom://") else { self = .catalog; return }
        let parts = url.dropFirst("custom://".count).split(separator: "/").map(String.init)
        let id = parts.count > 1 ? parts[1] : ""
        switch parts.first {
        case "catalog": self = .catalog
        case "object": self = .object(id)
        case "pay": self = .pay(id)
        case "do_pay": self = .paying(id, Int(parts.count > 2 ? parts[2] : "") ?? 0)
        case "my_payments": self = .myPayments
        default: self = .catalog
        }
    }

    var layoutPath: String? {
        switch self {
        case .catalog: return "/api/v1/layout/catalog"
        case .object(let id): return "/api/v1/layout/object/\(id)"
        case .pay(let id): return "/api/v1/layout/pay/\(id)"
        case .myPayments: return "/api/v1/layout/my_payments"
        case .paying: return nil
        }
    }
}

final class Router: ObservableObject {
    @Published var screen: Screen = .catalog
    @Published var json: [String: Any]?
    @Published var jsonVersion = 0
    @Published var errorText: String?

    func handle(url: String) {
        let screen = Screen(url: url)
        if case .paying(let id, let months) = screen {
            Task { await pay(objectId: id, months: months) }
        } else {
            self.screen = screen
        }
    }

    func load() async {
        guard let path = screen.layoutPath else { return }
        do {
            let (data, _) = try await URLSession.shared.data(from: URL(string: baseURL + path)!)
            json = try JSONSerialization.jsonObject(with: data) as? [String: Any]
            jsonVersion += 1
            errorText = nil
        } catch {
            errorText = error.localizedDescription
        }
    }

    private func pay(objectId: String, months: Int) async {
        var request = URLRequest(url: URL(string: "\(baseURL)/api/v1/payments")!)
        request.httpMethod = "POST"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        request.httpBody = try? JSONSerialization.data(withJSONObject: ["object_id": objectId, "months": months])
        do {
            let (_, response) = try await URLSession.shared.data(for: request)
            guard (response as? HTTPURLResponse)?.statusCode == 201 else {
                errorText = "Оплата не прошла: HTTP \((response as? HTTPURLResponse)?.statusCode ?? -1)"
                return
            }
            screen = .myPayments
        } catch {
            errorText = error.localizedDescription
        }
    }
}

/// Перехват навигационных действий custom:// из DivKit.
final class AppUrlHandler: NSObject, DivUrlHandler {
    static let routeNotification = Notification.Name("ArendaRoute")

    func handle(_ url: URL, info: DivActionInfo, sender: AnyObject?) {
        NotificationCenter.default.post(name: AppUrlHandler.routeNotification, object: url.absoluteString)
    }
}

struct ContentView: View {
    @StateObject private var router = Router()

    var body: some View {
        Group {
            if let json = router.json {
                DivKitScreen(json: json, version: router.jsonVersion)
            } else if let errorText = router.errorText {
                Text("Не удалось загрузить экран: \(errorText)").padding()
            } else {
                Text("Загрузка…").padding()
            }
        }
        .onReceive(NotificationCenter.default.publisher(for: AppUrlHandler.routeNotification)) { note in
            if let url = note.object as? String { router.handle(url: url) }
        }
        .onReceive(router.$screen) { _ in Task { await router.load() } }
        .task {
            // Быстрая проверка экранов без тапов: simctl launch ... -go custom://object/<id>
            if let go = UserDefaults.standard.string(forKey: "go") {
                router.handle(url: go)
            } else {
                await router.load()
            }
        }
    }
}

struct DivKitScreen: UIViewRepresentable {
    let json: [String: Any]
    let version: Int

    func makeUIView(context: Context) -> DivView {
        let components = DivKitComponents(urlHandler: AppUrlHandler())
        context.coordinator.components = components
        context.coordinator.version = version - 1 // заставляем updateUIView выставить источник
        return DivView(divKitComponents: components)
    }

    func updateUIView(_ uiView: DivView, context: Context) {
        guard context.coordinator.version != version else { return }
        context.coordinator.version = version
        Task {
            await uiView.setSource(DivViewSource(kind: .json(json), cardId: "catalog"))
        }
    }

    func makeCoordinator() -> Coordinator { Coordinator() }

    final class Coordinator {
        var components: DivKitComponents?
        var version = -1
    }
}
