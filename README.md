# API para proyecto final
El presente repositorio muestra el back-end para el proyecto de especialidad MoneyWise

## Tabla de contenido

- [API para proyecto final](#api-para-proyecto-final)
  - [Tabla de contenido](#tabla-de-contenido)
  - [Requisitos de instalación](#requisitos-de-instalación)
  - [Instrucciones para la instalación](#instrucciones-para-la-instalación)
  - [Enlaces externos](#enlaces-externos)

## Requisitos de instalación

Debes asegúrate de tener instalado y configurado Docker antes de comenzar.

- [Docker](https://www.docker.com)

## Instrucciones para la instalación

1. Clonar el repositorio en la máquina local:
   
   ```sh
   git clone //github.com/MauricioASG/coin-sage.git
   ```

2. Navegar al directorio del proyecto:
   
   ```sh
   cd coin-sage
   ```

3. Ejecutar el siguiente comando para iniciar los contenedores:

    ```sh
    docker-compose up -d
    ```

    > **IMPORTANTE**
    >
    > Debe estar iniciado el Docker engine para ejecutar el comando anterior,
    > si no lo está, se devolverá un mensaje de error indicando que no se
    > encontró el docker daemon.

4. La API estará disponible en `http://localhost:3050`.

Es importante ejecutar el codigo de la base de datos "database.sql" en un manejador de bases de datos, en mi caso yo utilice HeidieSQL, solo copiamos el codigo del archivo y lo ejecutamos para que pueda funcionar y gardar datos.

## Documentación detallada

Para obtener información detallada sobre los endpoints y cómo utilizar la API,
consulta la [documentación detallada](./docs/README.md).
