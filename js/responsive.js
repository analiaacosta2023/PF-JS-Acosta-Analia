/* bar es el id del boton hamburguesa
navbar es el id de la barra de navegacion completa
Este codigo hace aparecer la barra de navegacion cuando no
se ve en pequenos dispositivos, apretando el boton hamburguesa */

const bar = document.querySelector("#bar");
const nav = document.querySelector("#navbar");


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

/* Este codigo hace desaparecer la barra de navegacion cuando
se apreta la cruz.
close es el id de la cruz */

const close = document.getElementById('close');

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

/* codigo para abrir el offcanvas cart */

const cartBtn = document.querySelector("#lg-bag");
const offcanvas = document.querySelector(".offcanvas");

if (cartBtn) {
    cartBtn.addEventListener("click", () => {
        offcanvas.classList.add('active')
    });
}

const close2 = document.getElementById('close2');

if (close2) {
    close2.addEventListener('click', () => {
        offcanvas.classList.remove('active')
    })
}

/* codigo para el accordion footer */

function openAccordion(id) {
    const accordionOpen = document.querySelector(`#accordion-${id}`)
    accordionOpen.classList.toggle('mobile-not-show');

    const iconElement = document.querySelector(`[href="javascript:openAccordion(${id})"] i`);
  if (accordionOpen.classList.contains('mobile-not-show')) {
    iconElement.classList.replace('fa-chevron-up', 'fa-chevron-down');
  } else {
    iconElement.classList.replace('fa-chevron-down', 'fa-chevron-up');
  }
}

// Toastify

function showSuccessToast(mensaje) {
    Toastify({
        text: mensaje,
        duration: 3000,
        gravity: "top",
        position: "right",
        close: true,
        style: {
            background: "green",
          },
    }).showToast();
}

function showErrorToast(mensaje) {
    Toastify({
        text: mensaje,
        duration: 3000,
        gravity: "top",
        position: "right",
        close: true,
        style: {
            background: "red",
          },
    }).showToast();
}



