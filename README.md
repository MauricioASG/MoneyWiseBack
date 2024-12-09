# Mauricio Alejandro Serrano García
# N.C: 20460545
# API para proyecto final

## Descripción General
Este repositorio contiene el código fuente del back-end para **MoneyWise**, un sistema diseñado para la gestión de finanzas personales. Este componente es esencial para el manejo de datos de usuarios, transacciones financieras y metas de ahorro, permitiendo la comunicación eficiente con la base de datos y ofreciendo una API robusta y segura.

## Propósito del Proyecto
El back-end de **MoneyWise** tiene como objetivo:
- Proveer servicios RESTful para interactuar con los datos financieros de los usuarios.
- Garantizar la seguridad y escalabilidad en la gestión de la información.
- Servir como la base para la comunicación entre el front-end y la base de datos MySQL.

## Tabla de contenido

- [Descripción General](#descripción-general)
- [Propósito del Proyecto](#propósito-del-proyecto)
- [Requisitos de Instalación](#requisitos-de-instalación)
- [Instrucciones para la Instalación](#instrucciones-para-la-instalación)
- [Configuración de la Base de Datos](#configuración-de-la-base-de-datos)
- [Dependencias](#dependencias)

## Requisitos de Instalación
Antes de comenzar, asegúrate de tener instaladas las siguientes herramientas:
- **[Docker](https://www.docker.com)** (versión 20.10 o superior): Para contenedorización y despliegue.
- **[MySQL](https://www.mysql.com)** (versión 8.0): Para gestionar la base de datos.
- Cliente SQL como **HeidiSQL** o **MySQL Workbench**.


## Instrucciones para la instalación

Clonar el repositorio en la máquina local:
   
   ```sh
   git clone //github.com/MauricioASG/MoneyWiseBack.git
   ```

Navegar al directorio del proyecto:
   
   ```sh
   cd MoneyWiseBack
   ```

Ejecutar el siguiente comando para iniciar los contenedores:

  ```sh
  docker-compose up -d
  ```

  **IMPORTANTE**
  > Debe estar iniciado el Docker engine para ejecutar el comando anterior,
  > si no lo está, se devolverá un mensaje de error indicando que no se
  > encontró el docker daemon.

La API estará disponible en `http://localhost:3050`.

Es importante ejecutar el codigo de la base de datos "database.sql" en un manejador de bases de datos, en mi caso yo utilice HeidieSQL, solo copiamos el codigo del archivo y lo ejecutamos para que pueda funcionar y guardar datos.

## Configuración de la Base de Datos
Abre el archivo database.sql ubicado en el directorio del proyecto. Copia y ejecuta el código SQL en tu cliente de base de datos preferido (por ejemplo, HeidiSQL o MySQL Workbench). Asegúrate de que las tablas y datos necesarios se creen correctamente en tu base de datos.

## Dependencias
El proyecto utiliza las siguientes dependencias principales:

- Node.js (16.0 o superior): Entorno de ejecución para JavaScript.
- Express (^4.18.2): Framework para construir APIs RESTful.
- MySQL2 (^3.1.2): Conector para la comunicación con la base de datos MySQL.
- dotenv (^10.0.0): Manejo de variables de entorno.
- Docker (20.10 o superior): Para la contenedorización del entorno.
- Para una lista completa, consulta el archivo [package.json](https://github.com/MauricioASG/MoneyWiseBack/blob/main/package.json).

