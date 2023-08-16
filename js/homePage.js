// Boton de suscripcion

const subscribeBtn = document.getElementById("subscribeBtn");

// El botón de suscripción no aparece en shop ni en checkout, por eso se checkea primero que esté
if (subscribeBtn) {
    subscribeBtn.addEventListener("click", handleSubscription);
}

function handleSubscription() {
    const emailInput = document.getElementById("emailInput");
    const email = emailInput.value.trim();

    if (email === '') {
        showErrorToast("El campo email es obligatorio")
    } else if (isValidEmail(email)) {
        showSuccessToast("Gracias por suscribirte")
        emailInput.value = '';
    } else {
        showErrorToast("Email inválido")
    }
}

// Esta función se reutiliza en formularios contacto y checkout también

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.match(emailPattern)) {
        return true
    } else {
        return false
    }
}