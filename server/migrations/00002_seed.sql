-- PROTOTYPE seed: demo data for the vertical slice.

-- +goose Up
INSERT INTO users (id, email, password, display_name, can_lease, can_rent) VALUES
  ('00000000-0000-0000-0000-000000000001', 'landlord@example.com', 'stub', 'Анна Арендодатель', true, false),
  ('00000000-0000-0000-0000-000000000002', 'renter@example.com',  'stub', 'Борис Арендатор',   false, true)
ON CONFLICT DO NOTHING;

INSERT INTO objects (id, owner_id, title, address, description, price_per_month, photos) VALUES
  ('10000000-0000-0000-0000-000000000001',
   '00000000-0000-0000-0000-000000000001',
   'Студия у парка',
   'Москва, ул. Тверская, 1',
   'Светлая студия 28 м² с балконом, пятый этаж.',
   45000,
   '["https://picsum.photos/seed/arenda1/520/320"]'),
  ('10000000-0000-0000-0000-000000000002',
   '00000000-0000-0000-0000-000000000001',
   'Двушка у метро',
   'Санкт-Петербург, Невский пр., 50',
   '62 м², свежий ремонт, до метро пять минут пешком.',
   68000,
   '["https://picsum.photos/seed/arenda2/520/320"]'),
  ('10000000-0000-0000-0000-000000000003',
   '00000000-0000-0000-0000-000000000001',
   'Дом с террасой',
   'Казань, ул. Лесная, 12',
   'Таунхаус 120 м², своя терраса и парковка.',
   95000,
   '["https://picsum.photos/seed/arenda3/520/320"]')
ON CONFLICT DO NOTHING;
