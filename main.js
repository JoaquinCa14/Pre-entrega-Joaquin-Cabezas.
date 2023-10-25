const productos = {
    Herbicida: 10,
    Fungicida: 20,
    Insecticida: 30,
}

function calcularTotal() {
    let total = 0;
    let continuar = true;

    while (continuar) {
        let mensajeProductos = "Productos disponibles:\n";
        for (let producto in productos) {
            mensajeProductos += `${producto}: $${productos[producto]}\n`;
        }
        alert(mensajeProductos);

        const productoSeleccionado = prompt("Ingrese el nombre del producto seleccionado: ");

        if (productoSeleccionado in productos) {
            const cantidad = parseInt(prompt("Ingrese la cantidad de unidades: "));
            const subtotal = productos[productoSeleccionado] * cantidad;
            total += subtotal;
            alert(`Subtotal de ${productoSeleccionado}: $${subtotal}`);
        } else {
            alert("Producto no válido. Por favor, seleccione un producto válido.");
        }

        const respuesta = prompt("¿Desea agregar otro producto? (Sí/No): ").toLowerCase();
        continuar = respuesta === "sí" || respuesta === "si";
    }

    alert(`El total de su compra es: $${total}`);
}

calcularTotal();
