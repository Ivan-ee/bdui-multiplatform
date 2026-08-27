package transport

import (
	"fmt"

	"github.com/Ivan-ee/bdui-multiplatform/server/internal/models"
)

// DivKit-карта каталога, собираемая на бэкенде из живых данных.
// Формат divData одинаково принимают Android/iOS/Web SDK.
func buildCatalogLayout(objs []models.Object) map[string]any {
	items := []any{header()}

	if len(objs) == 0 {
		items = append(items, emptyState())
	} else {
		cards := make([]any, 0, len(objs))
		for _, o := range objs {
			cards = append(cards, objectCard(o))
		}
		items = append(items, map[string]any{
			"type":        "gallery",
			"orientation": "horizontal",
			"items":       cards,
			"item_spacing": 12,
			"content_alignment_vertical": "top",
			"width":       matchParent(),
			"height":      fixed(330),
		})
	}

	items = append(items, footer(objs))

	return map[string]any{
		// Канонический конверт DivKit: клиенты всех платформ ждут card+templates.
		"templates": map[string]any{},
		"card": map[string]any{
			"log_id": "catalog",
			"states": []any{
				map[string]any{
					"state_id": 0,
					"div":      containerVertical(matchParent(), wrapContent(), items...),
				},
			},
		},
	}
}

func header() map[string]any {
	return map[string]any{
		"text":  "Каталог объектов",
		"type":        "text",
		"font_size":   24,
		"font_weight": "bold",
		"text_color":  "#222222",
		"width":       matchParent(),
		"margins":     edgeInsets(16, 24, 16, 8),
	}
}

func emptyState() map[string]any {
	return map[string]any{
		"text": "Пока пусто: все объекты заняты.",
		"type":       "text",
		"font_size":  15,
		"text_color": "#888888",
		"width":      matchParent(),
		"margins":    edgeInsets(16, 32, 16, 32),
	}
}

func footer(objs []models.Object) map[string]any {
	return map[string]any{
		"text": fmt.Sprintf("Свободных объектов: %d", len(objs)),
		"type":       "text",
		"font_size":  14,
		"text_color": "#888888",
		"width":      matchParent(),
		"margins":    edgeInsets(16, 12, 16, 24),
	}
}

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
		map[string]any{
			"type":        "text",
			"text":  o.Title,
			"font_size":   17,
			"font_weight": "medium",
			"width":       matchParent(),
			"margins":     edgeInsets(12, 8, 12, 2),
		},
		map[string]any{
			"type":       "text",
			"text": o.Address,
			"font_size":  13,
			"text_color": "#777777",
			"width":      matchParent(),
			"margins":    edgeInsets(12, 2, 12, 6),
		},
		map[string]any{
			"type":        "text",
			"text":  fmt.Sprintf("%d ₽ / мес", o.PricePerMonth),
			"font_size":   16,
			"font_weight": "bold",
			"text_color":  "#1a6dd4",
			"width":       matchParent(),
			"margins":     edgeInsets(12, 2, 12, 12),
		},
	)
	card["background"] = []any{map[string]any{"color": "#ffffff"}}
	card["border"] = map[string]any{
		"corner_radius": 12,
		"stroke_width":  1,
		"stroke_color":  "#eeeeee",
		"has_shadow":    false,
	}

	return card
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
