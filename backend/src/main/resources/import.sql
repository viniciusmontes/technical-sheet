-- Insert materials
INSERT INTO tb_material (name, unit_measurement, cost) VALUES ('Macarrão', 'kg', 2.80);
INSERT INTO tb_material (name, unit_measurement, cost) VALUES ('Cebola', 'kg', 1.25);
INSERT INTO tb_material (name, unit_measurement, cost) VALUES ('Carne Moída', 'kg', 4.79);

-- Insert technical sheets
INSERT INTO tb_technical_sheet (id) VALUES (1);

-- Insert products
INSERT INTO tb_product (name, price, technical_sheet_id) VALUES ('Produto X', 15.00, 1);

-- Insert material quantities
INSERT INTO tb_material_quantity (material_id, technical_sheet_id, quantity) VALUES (1, 1, 0.320);
INSERT INTO tb_material_quantity (material_id, technical_sheet_id, quantity) VALUES (2, 1, 0.180);
INSERT INTO tb_material_quantity (material_id, technical_sheet_id, quantity) VALUES (3, 1, 1.200);
