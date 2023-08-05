// Boton de redireccion al shop

const goToShopBtn = document.getElementById("goToShopBtn");
goToShopBtn.addEventListener("click", redirectToShopPage);

function redirectToShopPage() {
    const shopPageUrl = "shop.html";
    window.location.href = shopPageUrl;
}

// Boton de suscripcion

const subscribeBtn = document.getElementById("subscribeBtn");
subscribeBtn.addEventListener("click", handleSubscription);


function handleSubscription() {
    const emailInput = document.getElementById("emailInput");
    const email = emailInput.value.trim();

    // validar email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !email.match(emailRegex)) {
        showErrorToast("Email inválido")
    } else {
        showSuccessToast("Gracias por suscribirte")
    }
}

