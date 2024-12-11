# Base de Datos - bd_flores

Este proyecto incluye el script para la creación y configuración de la base de datos `bd_flores`, junto con su tabla principal `person`.

## Requerimientos

- MySQL instalado en su sistema. Desarrollado con **Ver 8.0.31 for Win64 on x86_64 (MySQL Community Server - GPL)**.
- Acceso de administrador a MySQL.

## Despliegue y Ejecución

1. **Clonar este repositorio:**
   ```bash
   git clone https://github.com/YaguarWillRockJDFR/tesffullstack_flores.git
   ```
   Cambiar a la rama correspondiente:
   ```bash
   git checkout flores_bd
   ```

2. **Iniciar sesión en MySQL como usuario root:**
   ```bash
   mysql -u root -p
   ```

3. **Cargar el script de creación de la base de datos:**
   ```bash
   source bd/script_bd.sql;
   ```

4. **Verificar que la base de datos y la tabla `person` se hayan creado correctamente:**
   ```sql
   USE bd_flores;
   SHOW TABLES;
   SELECT * FROM person;
   ```

5. **Crear un nuevo usuario para la conexión del backend y otorgarle privilegios:**
   ```sql
   CREATE USER 'conexion'@'localhost' IDENTIFIED BY 'password';
   GRANT ALL PRIVILEGES ON bd_flores.* TO 'conexion'@'localhost';
   FLUSH PRIVILEGES;
   ```

6. **Salir de MySQL:**
   ```bash
   exit;
   ```

## Notas

- Asegúrate de tener configurado el puerto por defecto de MySQL (3306) o ajusta los archivos del backend en consecuencia.
- El script crea una tabla `person` con los siguientes campos:
  - `id` (autoincremental, clave primaria)
  - `nombre`
  - `apellido`
  - `fechaNacimiento`
  - `puesto`
  - `sueldo`

