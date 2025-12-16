Instrucciones para ejecutar el sistema
Este proyecto corresponde a una aplicación desarrollada con arquitectura de microservicios, utilizando Node.js con Express para el backend y Angular para el frontend.

Requisitos previos
Antes de ejecutar el sistema, asegúrese de tener instalado:

Node.js (versión 18 o superior)
Angular CLI (versión 15 o superior)
Navegador web
Postman (opcional para pruebas)
Estructura del proyecto
microservicios-agenda/

contactos-service
categorias-service
frontend-angular
Ejecución de los microservicios
Ejecutar contactos-service
Abrir una terminal y ubicarse en la carpeta:

cd contactos-service

Instalar dependencias:

npm install

Ejecutar el servidor:

node index.js

El servicio estará disponible en: http://localhost:3001

Ejecutar categorias-service
Abrir otra terminal y ubicarse en la carpeta:

cd categorias-service

Instalar dependencias:

npm install

Ejecutar el servidor:

node index.js

El servicio estará disponible en: http://localhost:3003

Ejecución del frontend Angular
Abrir otra terminal y ubicarse en la carpeta:

cd frontend-angular

Instalar dependencias:

npm install

Ejecutar la aplicación:

ng serve

La aplicación estará disponible en: http://localhost:4200

Pruebas
Los servicios pueden probarse utilizando Postman mediante los métodos GET, POST, PUT y DELETE.

Notas
Cada servicio debe ejecutarse en una terminal diferente.
Asegúrese de que los puertos 3001, 3003 y 4200 estén disponibles.
