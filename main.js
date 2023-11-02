const productos = {
    Herbicida: 10,
    Fungicida: 20,
    Insecticida: 30,
}

function buscarProducto(nombre) {
    const productoBuscado = nombre.toLowerCase();
    for (let producto in productos) {
        if (producto.toLowerCase() === productoBuscado) {
            return `Producto encontrado: ${producto} - Precio: $${productos[producto]}`;
        }
    }
    return "Producto no encontrado";
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

let opcion;
while (opcion !== "3") {
    opcion = prompt("Seleccione una opción:\n1. Filtrar un producto\n2. Comprar\n3. Salir");

    switch (opcion) {
        case "1":
            const nombreProductoABuscar = prompt("Ingrese el nombre del producto a filtrar: ");
            alert(buscarProducto(nombreProductoABuscar));
            break;
        case "2":
            calcularTotal();
            break;
        case "3":
            alert("Saliendo del programa. ¡Hasta luego!");
            break;
        default:
            alert("Opción no válida. Por favor, seleccione una opción válida.");
            break;
    }
}


calcularTotal();



