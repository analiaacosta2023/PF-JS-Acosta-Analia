class GestionarProductos {

    iniciar() {

        productos = [
            {
                "id": 1,
                "link_foto": "img/p1.jpeg",
                "nombre": "woman Clog 1",
                "coleccion": "Flamingo",
                "descripcion": "blablabla1",
                "rating": 4,
                "precio": 99,
                "stock": [0, 0, 0, 0, 0, 0]
            },
            {
                "id": 2,
                "link_foto": "img/p2.jpeg",
                "nombre": "woman Clog 2",
                "coleccion": "Orange",
                "descripcion": "blablabla2",
                "rating": 5,
                "precio": 99,
                "stock": [0, 0, 0, 0, 0, 0]
            },
            {
                "id": 3,
                "link_foto": "img/p3.jpeg",
                "nombre": "woman Clog 3",
                "coleccion": "Flamingo",
                "descripcion": "blablabla3",
                "rating": 3,
                "precio": 99,
                "stock": [0, 5, 0, 0, 0, 0]
            },
            {
                "id": 4,
                "link_foto": "img/p4.jpeg",
                "nombre": "woman Clog 4",
                "coleccion": "Watermelon",
                "descripcion": "blablabla4",
                "rating": 3,
                "precio": 99,
                "stock": [0, 0, 0, 0, 0, 0]
            },
            {
                "id": 5,
                "link_foto": "img/p5.jpeg",
                "nombre": "woman Clog 5",
                "coleccion": "Flamingo",
                "descripcion": "blablabla5",
                "rating": 3,
                "precio": 99,
                "stock": [0, 0, 0, 0, 0, 0]
            },
            {
                "id": 6,
                "link_foto": "img/p6.jpeg",
                "nombre": "woman Clog 6",
                "coleccion": "Crocodile",
                "descripcion": "blablabla6",
                "rating": 3,
                "precio": 99,
                "stock": [0, 0, 0, 0, 0, 0]
            },
            {
                "id": 7,
                "link_foto": "img/p7.jpeg",
                "nombre": "woman Clog 7",
                "coleccion": "Dinosaur",
                "descripcion": "blablabla7",
                "rating": 3,
                "precio": 99,
                "stock": [0, 0, 0, 0, 0, 0]
            },
            {
                "id": 8,
                "link_foto": "img/p8.jpeg",
                "nombre": "woman Clog 8",
                "coleccion": "Flamingo",
                "descripcion": "blablabla8",
                "rating": 3,
                "precio": 99,
                "stock": [0, 0, 0, 0, 0, 0]
            },
            {
                "id": 9,
                "link_foto": "img/p9.jpeg",
                "nombre": "woman Clog 9",
                "coleccion": "Flamingo",
                "descripcion": "blablabla9",
                "rating": 4,
                "precio": 99,
                "stock": [0, 0, 0, 0, 0, 0]
            },
            {
                "id": 10,
                "link_foto": "img/p10.jpeg",
                "nombre": "woman Clog 10",
                "coleccion": "Orange",
                "descripcion": "blablabla10",
                "rating": 5,
                "precio": 99,
                "stock": [0, 0, 0, 0, 0, 0]
            },
            {
                "id": 11,
                "link_foto": "img/p11.jpeg",
                "nombre": "woman Clog 11",
                "coleccion": "Orange",
                "descripcion": "blablabla11",
                "rating": 3,
                "precio": 99,
                "stock": [0, 0, 0, 0, 0, 0]
            },
            {
                "id": 12,
                "link_foto": "img/p12.jpeg",
                "nombre": "woman Clog 12",
                "coleccion": "Orange",
                "descripcion": "blablabla12",
                "rating": 3,
                "precio": 99,
                "stock": [0, 0, 0, 0, 0, 0]
            },
            {
                "id": 13,
                "link_foto": "img/p13.jpeg",
                "nombre": "woman Clog 13",
                "coleccion": "Crocodile",
                "descripcion": "blablabla13",
                "rating": 3,
                "precio": 99,
                "stock": [0, 0, 0, 0, 0, 0]
            },
            {
                "id": 14,
                "link_foto": "img/p14.jpeg",
                "nombre": "woman Clog 14",
                "coleccion": "Crocodile",
                "descripcion": "blablabla14",
                "rating": 3,
                "precio": 99,
                "stock": [0, 0, 0, 0, 0, 0]
            },
            {
                "id": 15,
                "link_foto": "img/p15.jpeg",
                "nombre": "woman Clog 15",
                "coleccion": "Flamingo",
                "descripcion": "blablabla15",
                "rating": 3,
                "precio": 99,
                "stock": [0, 0, 0, 0, 0, 0]
            },
            {
                "id": 16,
                "link_foto": "img/p16.jpeg",
                "nombre": "woman Clog 16",
                "coleccion": "Flamingo",
                "descripcion": "blablabla16",
                "rating": 3,
                "precio": 99,
                "stock": [0, 0, 0, 0, 0, 0],
            },
            {
                "id": 17,
                "link_foto": "img/p17.jpeg",
                "nombre": "woman Clog 17",
                "coleccion": "Flamingo",
                "descripcion": "blablabla17",
                "rating": 4,
                "precio": 99,
                "stock": [0, 0, 0, 0, 0, 0]
            },
            {
                "id": 18,
                "link_foto": "img/p18.jpeg",
                "nombre": "woman Clog 18",
                "coleccion": "Flamingo",
                "descripcion": "blablabla18",
                "rating": 5,
                "precio": 99,
                "stock": [0, 0, 0, 0, 0, 0]
            },
            {
                "id": 19,
                "link_foto": "img/p19.jpeg",
                "nombre": "woman Clog 19",
                "coleccion": "Flamingo",
                "descripcion": "blablabla19",
                "rating": 3,
                "precio": 99,
                "stock": [0, 0, 0, 0, 0, 0]
            },
            {
                "id": 20,
                "link_foto": "img/p20.jpeg",
                "nombre": "woman Clog 20",
                "coleccion": "Orange",
                "descripcion": "blablabla20",
                "rating": 3,
                "precio": 99,
                "stock": [0, 0, 0, 0, 0, 0]
            },
            {
                "id": 21,
                "link_foto": "img/p21.jpeg",
                "nombre": "woman Clog 21",
                "coleccion": "Watermelon",
                "descripcion": "blablabla21",
                "rating": 3,
                "precio": 99,
                "stock": [0, 0, 0, 0, 0, 0]
            },
            {
                "id": 22,
                "link_foto": "img/p22.jpeg",
                "nombre": "woman Clog 22",
                "coleccion": "Watermelon",
                "descripcion": "blablabla22",
                "rating": 3,
                "precio": 99,
                "stock": [0, 0, 0, 0, 0, 0]
            },
            {
                "id": 23,
                "link_foto": "img/p23.jpeg",
                "nombre": "woman Clog 23",
                "coleccion": "Watermelon",
                "descripcion": "blablabla23",
                "rating": 3,
                "precio": 99,
                "stock": [0, 0, 0, 0, 0, 0]
            },
            {
                "id": 24,
                "link_foto": "img/p24.jpeg",
                "nombre": "woman Clog 24",
                "coleccion": "Watermelon",
                "descripcion": "blablabla24",
                "rating": 3,
                "precio": 99,
                "stock": [0, 0, 0, 0, 0, 0]
            },
            {
                "id": 25,
                "link_foto": "img/p25.jpeg",
                "nombre": "woman Clog 25",
                "coleccion": "Dinosaur",
                "descripcion": "blablabla25",
                "rating": 4,
                "precio": 99,
                "stock": [0, 0, 0, 0, 0, 0]
            },
            {
                "id": 26,
                "link_foto": "img/p26.jpeg",
                "nombre": "woman Clog 26",
                "coleccion": "Dinosaur",
                "descripcion": "blablabla26",
                "rating": 5,
                "precio": 99,
                "stock": [0, 0, 0, 0, 0, 0]
            },
            {
                "id": 27,
                "link_foto": "img/p27.jpeg",
                "nombre": "woman Clog 27",
                "coleccion": "Dinosaur",
                "descripcion": "blablabla27",
                "rating": 3,
                "precio": 99,
                "stock": [0, 0, 0, 0, 0, 0],
            },
            {
                "id": 28,
                "link_foto": "img/p4.jpeg",
                "nombre": "woman Clog 28",
                "coleccion": "Watermelon",
                "descripcion": "blablabla28",
                "rating": 3,
                "precio": 99,
                "stock": [0, 0, 0, 0, 0, 0]
            },
            {
                "id": 29,
                "link_foto": "img/p29.jpeg",
                "nombre": "woman Clog 29",
                "coleccion": "Crocodile",
                "descripcion": "blablabla29",
                "rating": 5,
                "precio": 99,
                "stock": [0, 0, 0, 0, 0, 0]
            },
            {
                "id": 30,
                "link_foto": "img/p30.jpeg",
                "nombre": "woman Clog 30",
                "coleccion": "Crocodile",
                "descripcion": "blablabla30",
                "rating": 3,
                "precio": 99,
                "stock": [0, 0, 0, 0, 0, 0]
            },
            {
                "id": 31,
                "link_foto": "img/p31.jpeg",
                "nombre": "woman Clog 31",
                "coleccion": "Crocodile",
                "descripcion": "blablabla31",
                "rating": 3,
                "precio": 99,
                "stock": [0, 0, 0, 0, 0, 0]
            },
            {
                "id": 32,
                "link_foto": "img/p32.jpeg",
                "nombre": "woman Clog 32",
                "coleccion": "Orange",
                "descripcion": "blablabla32",
                "rating": 4,
                "precio": 99,
                "stock": [0, 0, 0, 0, 0, 0]
            }
        ];

        this.cargarProductos(productos);
    }

    cargarProductos(productos) {

        divProductos.innerHTML = "";

        if (productos.length === 0) {

            this.mostrarHeader("No se han encontrado productos");
            return false;

        } else {

            const productosACargar = productos.slice(0, productosVisibles);

            productosACargar.forEach((producto) => {

                const { id, coleccion, nombre, precio, link_foto, descripcion } = producto

                let prod = document.createElement("div");
                prod.classList.add('pro');
                prod.id = "row_" + id;
                prod.innerHTML = `<img src="./${link_foto}" alt="">
                <div class="des">
                    <span>${coleccion} Collection</span>
                    <h3>${nombre}<h3>
                    <h5>${descripcion}</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4 class="precio">$${precio}</h4>
                </div>
                <a href="javascript:addCarrito(${id})"><i class="fa-solid fa-cart-shopping cart" style="color: #000000;"></i></a>
                `
                divProductos.appendChild(prod);

            });
        }
    }

    mostrarHeader(msg) {

        const headerProductos = document.querySelector("#headerProductos");
        headerProductos.innerHTML = msg;

    }

    addCart(item) {

        const existe = carrito.some(producto => producto.id === item.id);

        if (existe) {

            const articulo = carrito.map(producto => {

                if (producto.id === item.id) {
                    producto.cantidad++;
                    return producto;
                } else {
                    return producto;
                }
            })

        } else {
            carrito.push(item);
        }

        this.actualizarCarrito();
        offcanvas.classList.add('active')
    }

    actualizarCarrito() {

        this.actualizarContador();
        this.mostrarCarrito();
        this.guardarCarrito();

    }

    guardarCarrito() {
        localStorage.setItem(key_carrito, JSON.stringify(carrito))
    }

    actualizarContador() {

        let totalCarrito = this.contarProductos();

        let countCarrito = document.querySelector("#badgeCarrito");
        countCarrito.innerHTML = totalCarrito;

    }

    contarProductos() {

        let contarProductos = 0;

        carrito.forEach((producto) => {

            contarProductos = contarProductos + parseInt(producto.cantidad);

        })


        return contarProductos;


    }

    mostrarCarrito() {

        const fullCart = document.getElementById("offcanvas-body");
        const emptyCart = document.getElementById("empty-cart");
        if (carrito.length === 0) {
            fullCart.style.display = "none";
            emptyCart.style.display = "flex";
            return
        }
        fullCart.style.display = "block";
        emptyCart.style.display = "none";

        let detalleCarrito = document.querySelector("#cart-products");
        detalleCarrito.innerHTML = "";
        let subtotal = 0;

        carrito.forEach((producto) => {


            const { id, link_foto, nombre, precio, cantidad } = producto;

            const row = document.createElement("tr");
            row.classList.add("row");
            subtotal += precio * cantidad;

            row.innerHTML = `

            <td><a href="javascript:eliminar(${id})"><i class="fa fa-times-circle" style="color: #818181;"></i></a></td>
            <td><img src=${link_foto} alt=""></td>
            <td>${nombre}</td>
            <td>$${precio}</td>
            <td><input type="number" value="${cantidad}"></td>`;

            detalleCarrito.append(row);

        })

        const addSubtotal = document.querySelector("#subtotal1");
        addSubtotal.innerHTML = "$ " + subtotal;
        totalObject.subtotal = subtotal

    }

    eliminarProducto(id) {
        carrito = carrito.filter(articulo => articulo.id != id);
        this.actualizarCarrito();
    }
}