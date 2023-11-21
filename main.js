function inicializarInput() {

    const input = document.getElementById("filtrarProducto");

    input.addEventListener("keydown", () => {
        console.log("keydown");
    });
}

function mostrarMensajeOk() {
    console.log("Se hizo click en ok")
}

function renderizarProductos(productos) {

    const contenedor = document.getElementById("contenedor");

    for (const producto of productos) {

        const divPadre = document.createElement("div");
        divPadre.className = "card";

        const divCard = document.createElement("div");
        divCard.className = "card";

        const divCardBody = document.createElement("div");
        divCardBody.className = "card-body";

        const h5 = document.createElement("h5");
        h5.className = "card-title";
        h5.innerText = producto.nombre;

        const p = document.createElement("p");
        p.className = "card-text";
        p.innerHTML = `<strong>Precio:</strong> ${producto.precio} - <strong>Stock:</strong> ${producto.stock}`;

        const button = document.createElement("button");
        button.className = "btn btn-primary";
        button.innerText = "Comprar";

        divCardBody.append(h5, p, button);
        divCard.append(divCardBody);
        divPadre.append(divCard);
        contenedor.append(divPadre);

    }
}


class producto {

    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;

    }
}

const ListadoDeProductos = [
    new producto("Herbicida", 100, 10),
    new producto("Fungicida", 200, 10),
    new producto("Insecticida", 300, 10),
    new producto("Pesticida", 500, 10),
];

renderizarProductos(ListadoDeProductos);
inicializarInput();



