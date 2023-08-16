function showOrder() {

    checkoutProducts.innerHTML = "";

    productosOrdenados.forEach((producto) => {

        const { link_foto, nombre, precio, cantidad } = producto;
        const item = document.createElement("div");
        item.classList.add("item");

        item.innerHTML = `
        <img src=${link_foto} alt="">
        <h5>${nombre}</h5>
        <h5>Precio: ${precio}</h5>
        <h5>Cantidad: ${cantidad}</h5>`;

        checkoutProducts.append(item);

    })

    const addTotal = document.querySelector("#total-orden");
    addTotal.innerHTML = `
    <h4>Subtotal: $ ${totalOrden.subtotal}</h4>
    <h4>Descuento: $ ${totalOrden.descuento}</h4>
    <h4>Envio: $ ${totalOrden.envio}</h4>
    <h4>Total: $ ${totalOrden.subtotal - totalOrden.descuento + totalOrden.envio}</h4>`
}


const form = document.getElementById('checkout-form');
form.addEventListener('submit', function (event) {

    event.preventDefault();

    const buyerFirstName = document.getElementById('buyer-firstname').value.trim();
    const buyerLastName = document.getElementById('buyer-lastname').value.trim();
    const buyerEmail = document.getElementById('buyer-email').value.trim();
    const buyerAddress = document.getElementById('buyer-address').value.trim();
    const cardName = document.getElementById('card-name').value.trim();
    const cardNumber = document.getElementById('card-number').value.trim();
    const cardCVV = document.getElementById('card-CVV').value.trim();
    const cardExpirationMonth = document.getElementById('card-EM').value.trim();
    const cardExpirationYear = document.getElementById('card-EY').value.trim();

    if (buyerFirstName === '' || buyerLastName === '' || buyerEmail === '' || buyerAddress === '' || cardName === '' || cardNumber === '' || cardCVV === '' || cardExpirationMonth === '' || cardExpirationYear === '') {
        showErrorToast('Todos los campos son obligatorios');
        return
    }
    if (!isValidEmail(buyerEmail)) {
        showErrorToast("Email inválido");
        return
    }

    if (!isValidCreditCardNumber(cardNumber)) {
        showErrorToast("Número de tarjeta inválido");
        return;
    }

    if (!isValidCVV(cardCVV)) {
        showErrorToast("CVV inválido");
        return;
    }

    if (!isValidExpirationDate(cardExpirationMonth, cardExpirationYear)) {
        showErrorToast("Fecha de vencimiento inválida");
        return;
    }

    Swal.fire({
        title: 'Su compra se ha realizado con éxito!',
        text: 'Fin del trabajo',
      })

    form.reset();
});


function isValidCreditCardNumber(cardNumber) {
    const cardNumberPattern = /^\d{16}$/;
    return cardNumberPattern.test(cardNumber);
}

function isValidCVV(cvv) {
    const cvvPattern = /^\d{3,4}$/;
    return cvvPattern.test(cvv);
}

function isValidExpirationDate(month, year) {
    const monthPattern = /^\d{2}$/;
    const yearPattern = /^\d{4}$/;

    if (!monthPattern.test(month) || !yearPattern.test(year)) {
        return false;
    }

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;

    const inputYear = parseInt(year);
    const inputMonth = parseInt(month);

    if (inputYear < currentYear) {
        return false;
    }

    if (inputYear === currentYear && inputMonth < currentMonth) {
        return false;
    }

    return true;
}