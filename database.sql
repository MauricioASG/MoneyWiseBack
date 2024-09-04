-- database.sql
-- Modificación de la base de datos
-- Modificación de la base de datos
DROP DATABASE IF EXISTS moneywise;
CREATE DATABASE moneywise;
USE moneywise;

CREATE TABLE Usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    passw VARCHAR(100) NOT NULL,
    salario DECIMAL(10, 2) DEFAULT 0,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS Categorias;
CREATE TABLE Categorias (
    id INT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(255)
);

CREATE TABLE Transacciones (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT,
  categoria_id INT,
  monto DECIMAL(10, 2) NOT NULL,
  tipo ENUM('Selecciona un tipo de gasto', 
            'Vivienda_Alquiler/Hipoteca', 'Vivienda_Servicios básicos', 'Vivienda_Mantenimiento', 'Vivienda_Impuestos inmobiliarios', 'Vivienda_Seguros de hogar',
            'Transporte_Combustible', 'Transporte_Transporte público', 'Transporte_Mantenimiento del vehículo', 'Transporte_Peajes', 'Transporte_Estacionamiento', 'Transporte_Seguro del vehículo',
            'Alimentación_Supermercado', 'Alimentación_Restaurantes', 'Alimentación_Comida rápida', 'Alimentación_Bebidas', 'Alimentación_Snacks',
            'Salud_Consultas médicas', 'Salud_Medicamentos', 'Salud_Seguro médico', 'Salud_Gimnasio', 'Salud_Productos de belleza', 'Salud_Cuidado personal',
            'Educación_Colegiaturas', 'Educación_Libros y materiales', 'Educación_Cursos y talleres', 'Educación_Material escolar', 'Educación_Actividades extracurriculares',
            'Entretenimiento_Cine', 'Entretenimiento_Teatro', 'Entretenimiento_Conciertos', 'Entretenimiento_Viajes', 'Entretenimiento_Suscripciones', 'Entretenimiento_Hobbies',
            'Ropa y calzado_Vestimenta', 'Ropa y calzado_Calzado', 'Ropa y calzado_Accesorios',
            'Regalos_Cumpleaños', 'Regalos_Navidad', 'Regalos_Otras ocasiones',
            'Ahorro e inversión_Ahorro a corto plazo', 'Ahorro e inversión_Ahorro a largo plazo', 'Ahorro e inversión_Inversiones',
            'Deudas_Tarjeta de crédito', 'Deudas_Préstamos personales', 'Deudas_Otros préstamos',
            'Mascotas_Alimento', 'Mascotas_Veterinaria', 'Mascotas_Productos de higiene', 'Mascotas_Accesorios', 'Mascotas_Adiestramiento',
            'Otros_Imprevistos', 'Otros_Donaciones', 'Otros_Impuestos (otros que no sean inmobiliarios)'
           ) NOT NULL,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES Usuario(id),
  FOREIGN KEY (categoria_id) REFERENCES Categorias(id)
);

-- Inserciones en la tabla Categorias
INSERT INTO Categorias (id, nombre, descripcion) 
VALUES (0, 'Selecciona una categoría', 'Auxiliar para selección de categoría'),
       (1, 'Vivienda', 'Gastos relacionados con la vivienda'),
       (2, 'Transporte', 'Gastos relacionados con el transporte'),
       (3, 'Alimentación', 'Gastos relacionados con la alimentación'),
       (4, 'Salud', 'Gastos relacionados con la salud'),
       (5, 'Educación', 'Gastos relacionados con la educación'),
       (6, 'Entretenimiento', 'Gastos relacionados con el entretenimiento'),
       (7, 'Ropa y calzado', 'Gastos relacionados con la ropa y el calzado'),
       (8, 'Regalos', 'Gastos relacionados con regalos'),
       (9, 'Ahorro e inversión', 'Gastos relacionados con el ahorro e inversión'),
       (10, 'Deudas', 'Gastos relacionados con las deudas'),
       (11, 'Mascotas', 'Gastos relacionados con las mascotas'),
       (12, 'Otros', 'Otros gastos');

INSERT INTO Usuario (nombre, email, passw, salario)
VALUES ('Mauricio Serrano', 'mau.com', '123', 40000.00);