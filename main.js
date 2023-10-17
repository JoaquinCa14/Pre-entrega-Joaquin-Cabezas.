const productos = {
    producto1: 10,
    producto2: 20,
    producto3: 30,
}


function calcularTotal() {
    let total = 0;
    let continuar = true;

    while (continuar) {

        console.log("Productos disponibles:");
        for (let producto in productos) {
            console.log(`${producto}: $${productos[producto]}`);
        }


        const productoSeleccionado = prompt("Ingrese el nombre del producto seleccionado: ");

        if (productoSeleccionado in productos) {

            const cantidad = parseInt(prompt("Ingrese la cantidad de unidades: "));


            const subtotal = productos[productoSeleccionado] * cantidad;


            total += subtotal;

            console.log(`Subtotal de ${productoSeleccionado}: $${subtotal}`);
        } else {
            console.log("Producto no válido. Por favor, seleccione un producto válido.");
        }


        const respuesta = prompt("¿Desea agregar otro producto? (Sí/No): ").toLowerCase();
        continuar = respuesta === "sí" || respuesta === "si";
    }


    console.log(`El total de su compra es: $${total}`);
}


calcularTotal();
