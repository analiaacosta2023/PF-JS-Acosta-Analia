let productos = new Array();

let gestor;

let carrito = [];

const key_carrito = "carrito";

let totalObject = {
    subtotal: 0,
    descuento: 0,
    envio: 0
}

let descuentoAplicado = false

document.addEventListener("DOMContentLoaded", () => {

    const carritoGuardado = localStorage.getItem(key_carrito);


    gestor = new GestionarProductos();
    gestor.iniciar();

    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado)
        gestor.actualizarCarrito();
    }
    totalCarrito();

})

function addCarrito(id) {

    const prod = document.querySelector("#row_" + id);

    let nombre = prod.querySelector('h3').textContent;
    let precio = parseInt(prod.querySelector(".precio").textContent.substring(1, prod.querySelector(".precio").textContent.length));
    let link_foto = prod.querySelector("img").src;

    let producto = new Producto(id, link_foto, nombre, precio);

    gestor.addCart(producto);
    totalCarrito();


}

function eliminar(id) {
    gestor.eliminarProducto(id);
    totalCarrito();
}

const discountButton = document.querySelector("#desc-button");
discountButton.addEventListener("click", aplicarDescuento);

function aplicarDescuento() {

    const discountInput = document.querySelector("#desc-input");
    const discountCode = discountInput.value.trim();

    if (discountCode != "AMIGOS2023") {
        alert("Codigo de descuento invalido");

    } else {
        descuentoAplicado = true
        totalCarrito();
    }
}

function mostrarDescuento() {
    const discountElement = document.querySelector("#descuento");

    if (descuentoAplicado) {
        totalObject.descuento = parseInt(totalObject.subtotal * 0.2);
        discountElement.innerHTML = "$ " + totalObject.descuento
    } else {
        totalObject.descuento = 0
        discountElement.innerHTML = "Sin descuento"
    }
}

const shippingButton = document.querySelector("#shipping-button");
shippingButton.addEventListener("click", aplicarEnvio);

function aplicarEnvio() {

    const shippingInput = document.querySelector("#envio-input");
    const postalCode = parseInt(shippingInput.value.trim());

    if (postalCode < 9999 && postalCode > 0) {
        totalObject.envio = 10;
    } else {
        alert("Codigo postal invalido");
    }

    totalCarrito();
}

function mostrarEnvio() {
    const shippingElement = document.querySelector("#envio");
    if ((totalObject.subtotal - totalObject.descuento) > 200) {
        shippingElement.innerHTML = "Envio gratis";
        totalObject.envio = 0
    } else if (totalObject.envio > 0) {
        shippingElement.innerHTML = "$ " + totalObject.envio;
    } else {
        shippingElement.innerHTML = "A calcular";
    }
}

function totalCarrito() {

    mostrarDescuento();
    mostrarEnvio();

    const total = totalObject.subtotal - totalObject.descuento + totalObject.envio;
    const totalElement = document.querySelector("#total");
    totalElement.innerHTML = "$ " + total;
}

