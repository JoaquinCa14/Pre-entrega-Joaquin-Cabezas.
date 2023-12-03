function inicializarInput() {

    const input = document.getElementById("filtrarProducto");

    input.addEventListener("keydown", () => {
        console.log("keydown");
    });
}

function mostrarMensajeOk() {
    Swal.fire("Su compra ha sido procesada y realizada con exito!");
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
        button.addEventListener("click", async () => {  
            const { value: cantidad } = await 
            Swal.fire({
                title: 'Ingrese la cantidad:',
                input: 'number',
                inputLabel: 'Cantidad',
                inputPlaceholder: 'Ingrese la cantidad...',
                showCancelButton: true,
                inputValidator: (value) => {
                    if (!value || value <= 0) {
                        return 'Por favor, ingrese una cantidad válida.';
                    }
                }
            });

            if (cantidad) {
                const subtotal = producto.precio * cantidad;

                Swal.fire({
                    title: 'Resumen de compra',
                    html: `<p><strong>Producto:</strong> ${producto.nombre}</p>
                           <p><strong>Cantidad:</strong> ${cantidad}</p>
                           <p><strong>Subtotal:</strong> $${subtotal.toFixed(2)}</p>`,
                    icon: 'info',
                    showCancelButton: true,
                    confirmButtonText: 'Confirmar compra',
                    cancelButtonText: 'Cancelar',
                }).then((result) => {
                    if (result.isConfirmed) {
                        console.log("Compra confirmada");
                        mostrarMensajeOk();
                    }
                });
            }
        });

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

fetch('data.json')
    .then ( (response) => {
        return response.json();
    })
    .then((responsejson) => {
        console.log(responsejson);
    });

renderizarProductos(ListadoDeProductos);
inicializarInput();



