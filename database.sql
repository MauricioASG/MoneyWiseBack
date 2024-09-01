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

CREATE TABLE Categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
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
            'Otros_Imprevistos', 'Otros_Donaciones', 'Otros_Impuestos (otros que no sean inmobiliarios)',
            'Mascotas_Alimento', 'Mascotas_Veterinaria', 'Mascotas_Productos de higiene', 'Mascotas_Accesorios', 'Mascotas_Adiestramiento'
           ) NOT NULL,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES Usuario(id),
  FOREIGN KEY (categoria_id) REFERENCES Categorias(id)
);

-- Inserciones en la tabla Categorias
INSERT INTO Categorias (nombre, descripcion) 
VALUES ('Vivienda', 'Gastos relacionados con la vivienda'),
       ('Transporte', 'Gastos relacionados con el transporte'),
       ('Alimentación', 'Gastos relacionados con la alimentación'),
       ('Salud', 'Gastos relacionados con la salud'),
       ('Educación', 'Gastos relacionados con la educación'),
       ('Entretenimiento', 'Gastos relacionados con el entretenimiento'),
       ('Ropa y calzado', 'Gastos relacionados con la ropa y el calzado'),
       ('Regalos', 'Gastos relacionados con regalos'),
       ('Ahorro e inversión', 'Gastos relacionados con el ahorro e inversión'),
       ('Deudas', 'Gastos relacionados con las deudas'),
       ('Otros', 'Otros gastos'),
       ('Mascotas', 'Gastos relacionados con las mascotas');

-- Actualizar la categoría auxiliar después
UPDATE Categorias SET id = 0, nombre = 'Selecciona una categoría', descripcion = 'Auxiliar para selección de categoría' WHERE id = 1;

-- Ajustar el AUTO_INCREMENT
ALTER TABLE Categorias AUTO_INCREMENT = 13;


