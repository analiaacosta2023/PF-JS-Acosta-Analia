class GestionarProductos {

    async iniciar() {
        try {
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            productos = resultado.productos;
            this.cargarProductos(productos);
        } catch (error) {
            console.error("Error al cargar productos", error);
        }
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

    vaciarCarrito() {
        carrito = []
        this.actualizarCarrito();
    }
}