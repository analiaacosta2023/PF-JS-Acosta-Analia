let productos = new Array();

let gestor;

const url = './js/db.json';

// Por el boton mostrar mas
let productosVisibles = 8;

// div donde se cargan los productos (solo en shop.html)
const divProductos = document.querySelector("#productos");

// variables para el carrito

let carrito = [];

const key_carrito = "carrito";

let totalObject = {
    subtotal: 0,
    descuento: 0,
    envio: 0
}

let descuentoAplicado = false

// variables para checkout

let productosOrdenados = {};
let totalOrden = {};

const key_order = "order";

const checkoutProducts = document.querySelector(".checkout1");

//Iniciacion de la pagina

document.addEventListener("DOMContentLoaded", () => {

    const carritoGuardado = localStorage.getItem(key_carrito);
    const ordenGuardada = localStorage.getItem(key_order);

    gestor = new GestionarProductos();

    // Los productos solo se cargan en shop.html, el carrito en todas las paginas
    if (divProductos) {
        gestor.iniciar();
    }

    if (carritoGuardado) {

        carrito = JSON.parse(carritoGuardado)
        gestor.actualizarCarrito();
    }
    totalCarrito();

    
    if(checkoutProducts && ordenGuardada) {

        productosOrdenados = JSON.parse(ordenGuardada).carrito
        totalOrden = JSON.parse(ordenGuardada).total
        showOrder();
    }
})

// Carrito

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
        showErrorToast("Codigo de descuento invalido");

    } else {
        descuentoAplicado = true
        showSuccessToast("Descuento aplicado")
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
        showSuccessToast("Envío calculado")
        totalObject.envio = 10;
    } else {
        showErrorToast("Codigo postal invalido");
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

// Mostrar mas productos en el shop

const showMoreBtn = document.getElementById("showMoreBtn");
if (showMoreBtn) {
    showMoreBtn.addEventListener("click", mostrarMasProductos);
}

function mostrarMasProductos() {
    productosVisibles += 4;

    gestor.cargarProductos(productos);


    if (productosVisibles >= productos.length) {
        showMoreBtn.style.display = "none";
    }
}

// Para checkout

const checkoutBtn = document.getElementById("checkout-btn");
if (checkoutBtn) {
    checkoutBtn.addEventListener("click", handleCheckout);
}


function handleCheckout() {
    const carrito = JSON.parse(localStorage.getItem(key_carrito));

    const order = { carrito: carrito, total: totalObject }
    console.log(order)

    localStorage.setItem(key_order, JSON.stringify(order))
    debugger
    redirectToCheckout();
    gestor.vaciarCarrito();

}

function redirectToCheckout() {
    const checkoutUrl = "checkout.html";
    window.location.href = checkoutUrl;
}


