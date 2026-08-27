package transport

import (
	"fmt"
	"time"

	"github.com/Ivan-ee/bdui-multiplatform/server/internal/models"
)

// Навигационная схема прототипа: нестандартная схема custom:// — DivKit на всех
// трёх клиентах отдаёт такие действия приложению (web: onCustomAction,
// Android: DivExternalActionHandler, iOS: DivUrlHandler).
const (
	schemeCatalog    = "custom://catalog"
	schemeMyPayments = "custom://my_payments"
)

func action(logID, url string) map[string]any {
	return map[string]any{"log_id": logID, "url": url}
}

// DivKit-карта экрана в конверте {templates, card}.
func cardEnvelope(logID string, root map[string]any) map[string]any {
	return map[string]any{
		"templates": map[string]any{},
		"card": map[string]any{
			"log_id": logID,
			"states": []any{
				map[string]any{"state_id": 0, "div": root},
			},
		},
	}
}

// buildCatalogLayout — каталог: карточки открывают Объект, шапка ведёт в кабинет.
func buildCatalogLayout(objs []models.Object) map[string]any {
	items := []any{
		row(
			header(),
			map[string]any{
				"type":        "text",
				"text":        "Мои платежи →",
				"font_size":   14,
				"text_color":  "#1a6dd4",
				"width":       wrapContent(),
				"height":      wrapContent(),
				"margins":     edgeInsets(0, 30, 16, 8),
				"action":      action("open_my_payments", schemeMyPayments),
			},
		),
	}

	if len(objs) == 0 {
		items = append(items, emptyState("Пока пусто: все объекты заняты."))
	} else {
		cards := make([]any, 0, len(objs))
		for _, o := range objs {
			cards = append(cards, objectCard(o))
		}
		items = append(items, map[string]any{
			"type":                       "gallery",
			"orientation":                "horizontal",
			"items":                      cards,
			"item_spacing":               12,
			"content_alignment_vertical": "top",
			"width":                      matchParent(),
			"height":                     fixed(330),
		})
	}

	items = append(items, footer(fmt.Sprintf("Свободных объектов: %d", len(objs))))
	return cardEnvelope("catalog", containerVertical(matchParent(), wrapContent(), items...))
}

// buildObjectLayout — карточка Объекта: фото, описание, кнопка аренды.
func buildObjectLayout(o models.Object) map[string]any {
	imageURL := "https://picsum.photos/seed/arenda/520/320"
	if len(o.Photos) > 0 {
		imageURL = o.Photos[0]
	}

	items := []any{
		backButton(),
		map[string]any{
			"type":      "image",
			"image_url": imageURL,
			"width":     matchParent(),
			"height":    fixed(200),
			"scale":     "fill",
			"margins":   edgeInsets(16, 8, 16, 8),
			"border":    map[string]any{"corner_radius": 12, "stroke_width": 0, "has_shadow": false},
		},
		text(fmt.Sprintf("%d ₽ / мес", o.PricePerMonth), 22, "#1a6dd4", true),
		text(o.Title, 20, "#222222", true),
		text(o.Address, 14, "#777777", false),
		text(o.Description, 15, "#444444", false),
	}

	if o.Status == "free" {
		items = append(items, button(
			"Арендовать",
			"#1a6dd4",
			action("open_pay_"+o.ID, "custom://pay/"+o.ID),
		))
	} else {
		items = append(items, text("Занято — из каталога скрыт.", 15, "#b3541e", true))
	}

	return cardEnvelope("object_"+o.ID, containerVertical(matchParent(), wrapContent(), items...))
}

// buildPayLayout — оплата-заглушка: окно аренды пресетами, сумму считает сервер.
func buildPayLayout(o models.Object) map[string]any {
	items := []any{
		backButton(),
		text(fmt.Sprintf("Оплата: %s", o.Title), 20, "#222222", true),
		text("Выберите окно аренды:", 15, "#777777", false),
	}

	for _, m := range []int{1, 3, 6, 12} {
		label := fmt.Sprintf("%d мес — %d ₽", m, o.PricePerMonth*m)
		items = append(items, button(
			label,
			"#1a6dd4",
			action(fmt.Sprintf("pay_%s_%d", o.ID, m), fmt.Sprintf("custom://do_pay/%s/%d", o.ID, m)),
		))
	}

	items = append(items, text(
		fmt.Sprintf("Дата начала аренды: сегодня, %s", time.Now().Format("02.01.2006")),
		13, "#999999", false,
	))

	return cardEnvelope("pay_"+o.ID, containerVertical(matchParent(), wrapContent(), items...))
}

// buildMyPaymentsLayout — кабинет Арендатора: лента «Мои платежи».
func buildMyPaymentsLayout(pays []models.Payment) map[string]any {
	items := []any{
		backButton(),
		text("Мои платежи", 24, "#222222", true),
	}

	if len(pays) == 0 {
		items = append(items, emptyState("Платежей пока нет."))
	}
	for _, p := range pays {
		items = append(items, paymentCard(p))
	}

	return cardEnvelope("my_payments", containerVertical(matchParent(), wrapContent(), items...))
}

func paymentCard(p models.Payment) map[string]any {
	return map[string]any{
		"type":        "container",
		"orientation": "vertical",
		"width":       matchParent(),
		"height":      wrapContent(),
		"margins":     edgeInsets(16, 8, 16, 8),
		"background":  []any{map[string]any{"type": "solid", "color": "#ffffff"}},
		"border":      map[string]any{"corner_radius": 12, "stroke_width": 1, "stroke_color": "#eeeeee", "has_shadow": false},
		"items": []any{
			text(p.ObjectTitle, 17, "#222222", true),
			text(p.ObjectAddress, 13, "#777777", false),
			text(fmt.Sprintf("С %s, %d мес — %d ₽",
				p.StartDate.Format("02.01.2006"), p.Months, p.Amount), 15, "#222222", false),
			text("успешно", 13, "#2e7d32", true),
		},
	}
}

// --- переиспользуемые элементы ----------------------------------------------

func objectCard(o models.Object) map[string]any {
	imageURL := "https://picsum.photos/seed/arenda/520/320"
	if len(o.Photos) > 0 {
		imageURL = o.Photos[0]
	}

	card := containerVertical(
		fixed(240), wrapContent(),
		map[string]any{
			"type":                         "image",
			"image_url":                    imageURL,
			"width":                        matchParent(),
			"height":                       fixed(140),
			"scale":                        "fill",
			"content_alignment_horizontal": "center",
		},
		text(o.Title, 17, "#222222", true),
		text(o.Address, 13, "#777777", false),
		text(fmt.Sprintf("%d ₽ / мес", o.PricePerMonth), 16, "#1a6dd4", true),
	)
	card["background"] = []any{map[string]any{"type": "solid", "color": "#ffffff"}}
	card["border"] = map[string]any{
		"corner_radius": 12,
		"stroke_width":  1,
		"stroke_color":  "#eeeeee",
		"has_shadow":    false,
	}
	// Тап по карточке открывает Объект.
	card["action"] = action("open_object_"+o.ID, "custom://object/"+o.ID)
	return card
}

func backButton() map[string]any {
	return map[string]any{
		"type":       "text",
		"text":       "← В каталог",
		"font_size":  15,
		"text_color": "#1a6dd4",
		"width":      wrapContent(),
		"height":     wrapContent(),
		"margins":    edgeInsets(16, 16, 16, 4),
		"action":     action("back_to_catalog", schemeCatalog),
	}
}

func header() map[string]any {
	return map[string]any{
		"text":        "Каталог объектов",
		"type":        "text",
		"font_size":   24,
		"font_weight": "bold",
		"text_color":  "#222222",
		"width":       wrapContent(),
		"height":      wrapContent(),
		"margins":     edgeInsets(16, 24, 0, 8),
	}
}

// row — горизонтальная пара элементов (шапка каталога: заголовок + кабинет).
func row(items ...any) map[string]any {
	return map[string]any{
		"type":        "container",
		"orientation": "horizontal",
		"items":       items,
		"width":       matchParent(),
		"height":      wrapContent(),
	}
}

func text(value string, size int, color string, bold bool) map[string]any {
	t := map[string]any{
		"type":       "text",
		"text":       value,
		"font_size":  size,
		"text_color": color,
		"width":      matchParent(),
		"height":     wrapContent(),
		"margins":    edgeInsets(16, 4, 16, 4),
	}
	if bold {
		t["font_weight"] = "bold"
	}
	return t
}

func button(label, color string, act map[string]any) map[string]any {
	return map[string]any{
		"type":       "container",
		"orientation": "horizontal",
		"width":      matchParent(),
		"height":     wrapContent(),
		"margins":    edgeInsets(16, 8, 16, 8),
		"background": []any{map[string]any{"type": "solid", "color": color}},
		"border":     map[string]any{"corner_radius": 10, "stroke_width": 0, "has_shadow": false},
		"paddings":   edgeInsets(12, 12, 12, 12),
		"action":     act,
		"items": []any{
			map[string]any{
				"type":           "text",
				"text":           label,
				"font_size":      16,
				"font_weight":    "medium",
				"text_color":     "#ffffff",
				"width":          matchParent(),
				"height":         wrapContent(),
				"text_alignment": "center",
			},
		},
	}
}

func emptyState(message string) map[string]any {
	return map[string]any{
		"type":       "text",
		"text":       message,
		"font_size":  15,
		"text_color": "#888888",
		"width":      matchParent(),
		"height":     wrapContent(),
		"margins":    edgeInsets(16, 32, 16, 32),
	}
}

func footer(value string) map[string]any {
	return map[string]any{
		"type":       "text",
		"text":       value,
		"font_size":  14,
		"text_color": "#888888",
		"width":      matchParent(),
		"height":     wrapContent(),
		"margins":    edgeInsets(16, 12, 16, 24),
	}
}

// --- хелперы структуры DivKit -----------------------------------------------

func containerVertical(width, height map[string]any, items ...any) map[string]any {
	return map[string]any{
		"type":        "container",
		"orientation": "vertical",
		"items":       items,
		"width":       width,
		"height":      height,
	}
}

func matchParent() map[string]any { return map[string]any{"type": "match_parent"} }
func wrapContent() map[string]any { return map[string]any{"type": "wrap_content"} }

func fixed(v int) map[string]any { return map[string]any{"type": "fixed", "value": v} }

func edgeInsets(left, top, right, bottom int) map[string]any {
	return map[string]any{"left": left, "top": top, "right": right, "bottom": bottom}
}
