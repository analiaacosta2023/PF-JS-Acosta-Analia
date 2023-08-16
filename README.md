# E-commerce con HTML, CSS y JS - Ana Random Store

## Introducción:
Este trabajo se realizó como proyecto final del curso de Javascript de Coderhouse.
Se programó un simulador de una tienda de suecos ficticia. Ninguno de los productos existen, simplemente son imágenes creadas con inteligencia artificial.

## Datos generales:

### Sobre la alumna
- Nombre: Analía Acosta
- [LinkedIn](https://www.linkedin.com/in/analia-acosta-engineer/)
- [GitHub](https://github.com/analiaacosta2023/)

### Sobre el curso
- Javascript - Coderhouse
- Comisión: 43140
- Profesor: Nicolás Martini
- Tutora: Ayelén Gonzalez

## Deploy
Se puede visualizar e interactuar con la aplicación desde el [link](https://analiaacosta2023.github.io/PF-JS-Acosta-Analia/).

## Como correr el proyecto localmente
1. Clonar el repositorio.
2. Abrir el archivo **index.html** con live server.

## Recorrido por la tienda

### Inicio
Al ingresar a la tienda, nos encontramos primero con una barra de navegación que nos permite recorrer las diferentes secciones:
- Inicio
- Productos
- Nosotros
- Contacto
- Carrito (desplegable)

En **inicio**, visualizamos el botón *Entrar a la tienda* que nos redirige al shop.
Y más abajo, un espacio para adherirte a la newsletter dejando tu email.
Se creó un pie de página a modo ilustrativo.

### Productos
Desde la barra de navegación, presionando en *productos*, o desde el botón *Entrar a la tienda*, se puede acceder al listado de productos.
Con el botón *Mostrar más*, se hacen visibles más productos del catálogo.
Y presionando en el ícono *carrito* de las tarjetas, se agregan los productos al carrito.

### Nosotros
Espacio con la descripción de la empresa.
Y más abajo, nuevamente para adherirte a la newsletter dejando tu email.

### Contacto
Lo destacable de esta sección, es el formulario de contacto.

### Carrito
Se puede abrir el **carrito** desplegable desde la barra de navegación, o cada vez que se añade un producto.
En caso de no existir productos cargados, se notificará.
Pero de existir productos en él, se podrá borrar ítems, *aplicar el código de descuento* **"AMIGOS2023"**, *calcular el envío* o *finalizar compra*.
El **envío gratis en compras mayores a $200** (3 productos cargados, dado que en esta simulación todos los productos cuestan $99).

### Checkout
Presionando en *finalizar compra*, se redirigirá al **checkout**.
Se podrá revisar la compra y luego cargar el formulario de datos.
Cuando se completan todos los espacios del formulario en el formato correspondiente, se puede *completar orden*.

<div align="right">Fin del recorrido.</div>

## Archivos .js
- *main.js* con las funciones principales del simulador: cargar productos, carrito y checkout.
- *homePage.js* con los script para la suscripción al newsletter.
- *contacto.js* con los script del formulario de contacto.
- *checkout.js* para mostrar los productos de la orden y luego validar el formulario de finalización de compra.
- *reponsive.js* con los script para la navbar y el footer para pequeños dispositivos, para abrir el carrito y para hacer funcionar notificaciones de toastify.
- Clases *GestinarProductos.js* y *Producto.js*.

## Archivo .json
Dado que la consiga pide utilizar el método fetch, se materializó con el archivo *db.json* que posee los datos de los productos.

## Librerías externas utilizadas
- **[Sweet Alert](https://sweetalert2.github.io/)** para el alert final.
- **[Toastify](https://www.npmjs.com/package/toastify-js)** para las notificaciones.