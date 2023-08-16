const form = document.getElementById('contact-form');
const cancelButton = document.getElementById('cancel-button');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || subject === '' || message === '') {
        showErrorToast('Todos los campos son obligatorios');
        return
    }
    if (!isValidEmail(email)) {
        showErrorToast("Email inválido");
        return
    }

    showSuccessToast("Mensaje enviado con éxito")
    form.reset();

});