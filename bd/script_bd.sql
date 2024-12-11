CREATE DATABASE bd_flores;

USE bd_flores;

CREATE TABLE person (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    fechaNacimiento DATE,
    puesto VARCHAR(50),
    sueldo DECIMAL(10,2)
);

CREATE USER 'conexion'@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON bd_flores.* TO 'conexion'@'%';
FLUSH PRIVILEGES;
