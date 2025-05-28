-- Insert materials
INSERT INTO tb_material (name, unit_measurement, cost) VALUES ('Macarrão', 'kg', 2.80);     -- ID 1
INSERT INTO tb_material (name, unit_measurement, cost) VALUES ('Cebola', 'kg', 1.25);       -- ID 2
INSERT INTO tb_material (name, unit_measurement, cost) VALUES ('Carne Moída', 'kg', 4.79);  -- ID 3
INSERT INTO tb_material (name, unit_measurement, cost) VALUES ('Molho de Tomate', 'L', 3.10); -- ID 4
INSERT INTO tb_material (name, unit_measurement, cost) VALUES ('Queijo Mussarela', 'kg', 6.50); -- ID 5
INSERT INTO tb_material (name, unit_measurement, cost) VALUES ('Pão de Hambúrguer', 'un', 0.80); -- ID 6
INSERT INTO tb_material (name, unit_measurement, cost) VALUES ('Hambúrguer Bovino', 'un', 2.50); -- ID 7
INSERT INTO tb_material (name, unit_measurement, cost) VALUES ('Alface', 'kg', 3.00); -- ID 8
INSERT INTO tb_material (name, unit_measurement, cost) VALUES ('Tomate', 'kg', 2.20); -- ID 9

-- Insert technical sheets
INSERT INTO tb_technical_sheet (id) VALUES (1);
INSERT INTO tb_technical_sheet (id) VALUES (2);
INSERT INTO tb_technical_sheet (id) VALUES (3);

-- Insert products
INSERT INTO tb_product (name, price, technical_sheet_id) VALUES ('Macarronada Completa', 25.00, 1);
INSERT INTO tb_product (name, price, technical_sheet_id) VALUES ('Hambúrguer Artesanal', 18.00, 2);
INSERT INTO tb_product (name, price, technical_sheet_id) VALUES ('Lasanha à Bolonhesa', 30.00, 3);

-- Insert material quantities for "Macarronada Completa" (ID 1)
INSERT INTO tb_material_quantity (material_id, technical_sheet_id, quantity) VALUES (1, 1, 0.350); -- Macarrão
INSERT INTO tb_material_quantity (material_id, technical_sheet_id, quantity) VALUES (2, 1, 0.150); -- Cebola
INSERT INTO tb_material_quantity (material_id, technical_sheet_id, quantity) VALUES (3, 1, 0.500); -- Carne Moída
INSERT INTO tb_material_quantity (material_id, technical_sheet_id, quantity) VALUES (4, 1, 0.300); -- Molho de Tomate
INSERT INTO tb_material_quantity (material_id, technical_sheet_id, quantity) VALUES (5, 1, 0.200); -- Queijo Mussarela

-- Insert material quantities for "Hambúrguer Artesanal" (ID 2)
INSERT INTO tb_material_quantity (material_id, technical_sheet_id, quantity) VALUES (6, 2, 1);     -- Pão de Hambúrguer
INSERT INTO tb_material_quantity (material_id, technical_sheet_id, quantity) VALUES (7, 2, 1);     -- Hambúrguer Bovino
INSERT INTO tb_material_quantity (material_id, technical_sheet_id, quantity) VALUES (5, 2, 0.050); -- Queijo Mussarela
INSERT INTO tb_material_quantity (material_id, technical_sheet_id, quantity) VALUES (8, 2, 0.030); -- Alface
INSERT INTO tb_material_quantity (material_id, technical_sheet_id, quantity) VALUES (9, 2, 0.040); -- Tomate

-- Insert material quantities for "Lasanha à Bolonhesa" (ID 3)
INSERT INTO tb_material_quantity (material_id, technical_sheet_id, quantity) VALUES (1, 3, 0.300); -- Macarrão
INSERT INTO tb_material_quantity (material_id, technical_sheet_id, quantity) VALUES (3, 3, 0.600); -- Carne Moída
INSERT INTO tb_material_quantity (material_id, technical_sheet_id, quantity) VALUES (4, 3, 0.400); -- Molho de Tomate
INSERT INTO tb_material_quantity (material_id, technical_sheet_id, quantity) VALUES (5, 3, 0.250); -- Queijo Mussarela
INSERT INTO tb_material_quantity (material_id, technical_sheet_id, quantity) VALUES (2, 3, 0.100); -- Cebola
