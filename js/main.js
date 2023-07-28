let productos = new Array();

let gestor;

let carrito = [];

const key_carrito = "carrito";




document.addEventListener("DOMContentLoaded", () => {

    const carritoGuardado = localStorage.getItem(key_carrito);


    gestor = new GestionarProductos();
    gestor.iniciar();

    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado)
        gestor.actualizarCarrito();
    }
    aplicarEnvio();

})

function addCarrito(id) {

    const prod = document.querySelector("#row_" + id);

    let nombre = prod.querySelector('h3').textContent;
    let precio = parseInt(prod.querySelector(".precio").textContent.substring(1, prod.querySelector(".precio").textContent.length));
    let link_foto = prod.querySelector("img").src;

    let producto = new Producto(id, link_foto, nombre, precio);

    gestor.addCart(producto);
    aplicarEnvio();
    aplicarDescuento();

}

function eliminar(id) {
    gestor.eliminarProducto(id);
    aplicarEnvio();
    aplicarDescuento();
}


const discountButton = document.querySelector("#desc-button");
discountButton.addEventListener("click", aplicarDescuento);

function aplicarDescuento() {

    const discountInput = document.querySelector("#desc-input");
    const discountCode = discountInput.value.trim();
    const subtotal = parseInt(document.querySelector("#subtotal1").textContent.substring(1, document.querySelector("#subtotal1").textContent.length));

    if (discountCode) {
        if (discountCode === "AMIGOS2023") {

            const discountAmount = parseInt(subtotal * 0.2);

            const discountElement = document.querySelector("#descuento");
            discountElement.innerHTML = "$ " + discountAmount;

        } else {
            alert("Codigo de descuento invalido");
        }
    }

    totalCarrito();
}

const shippingButton = document.querySelector("#shipping-button");
shippingButton.addEventListener("click", aplicarEnvio);

function aplicarEnvio() {

    const shippingInput = document.querySelector("#envio-input");
    const postalCode = parseInt(shippingInput.value.trim());
    let subtotal = parseInt(document.querySelector("#subtotal1").textContent.substring(1, document.querySelector("#subtotal1").textContent.length));
    const discountAmount = parseInt(document.querySelector("#descuento").textContent.substring(1, document.querySelector("#descuento").textContent.length));
    const shippingElement = document.querySelector("#envio");

    if (!isNaN(discountAmount)) {
        subtotal = subtotal - discountAmount;
    }

    if ((subtotal) > 200) {

        shippingElement.innerHTML = "Envio gratis";
        return
    }
    if (postalCode) {
        if (postalCode < 9999 && postalCode > 0) {

            const shipping = 10;
            shippingElement.innerHTML = "$ " + shipping;
        } else {
            alert("Codigo postal invalido");
        }
    } else {
        shippingElement.innerHTML = "A calcular";
    }


    totalCarrito();
}


function totalCarrito() {
    const subtotal = parseInt(document.querySelector("#subtotal1").textContent.substring(1, document.querySelector("#subtotal1").textContent.length));
    let discountAmount = parseInt(document.querySelector("#descuento").textContent.substring(1, document.querySelector("#descuento").textContent.length));
    let shipping = parseInt(document.querySelector("#envio").textContent.substring(1, document.querySelector("#envio").textContent.length));

    if (isNaN(discountAmount)) {
        discountAmount = 0;
    }
    if (isNaN(shipping)) {
        shipping = 0;
    }

    const total = subtotal - discountAmount + shipping;
    const totalElement = document.querySelector("#total");
    totalElement.innerHTML = "$ " + total;
}

