-- database.sql
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
    usuario_id INT,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(255),
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id)
);

CREATE TABLE Transacciones (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT,
  categoria_id INT,
  monto DECIMAL(10, 2) NOT NULL,
  tipo ENUM('Ingreso', 'Gasto') NOT NULL,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES Usuario(id),
  FOREIGN KEY (categoria_id) REFERENCES Categorias(id)
);

CREATE TABLE MetaFinanciera (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT,
  monto DECIMAL(10, 2) NOT NULL,
  periodo ENUM('Diario', 'Semanal') NOT NULL,
  ahorro_programado DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (usuario_id) REFERENCES Usuario(id)
);

-- Inserciones en la tabla Usuario
INSERT INTO Usuario (nombre, email, passw, salario)
VALUES ('Ana García', 'ana@example.com', 'pass123', 20000.00),
       ('Pedro López', 'pedro@example.com', 'securePwd', 10000.00);

-- Obtén los IDs insertados
SET @user_id1 = (SELECT id FROM Usuario WHERE email = 'ana@example.com');
SET @user_id2 = (SELECT id FROM Usuario WHERE email = 'pedro@example.com');

-- Inserciones en la tabla Categorias
INSERT INTO Categorias (usuario_id, nombre, descripcion) 
VALUES (@user_id1, 'Comida', 'Gastos en alimentación'),
       (@user_id2, 'Salario', 'Ingresos mensuales'),
       (@user_id1, 'Transporte', 'Gastos en movilidad'),
       (@user_id2, 'Compras', 'Gastos en compras varias'),
       (@user_id1, 'Entretenimiento', 'Gastos en actividades recreativas');
