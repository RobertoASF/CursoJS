const meses = ['Enero', 'Febrero', 'Marzo',];
meses[3] = 'Abril';
// Metodos del arreglo

// Agregar al final de Arreglo

meses.push('Mayo');

console.table(meses);

const carrito = [];

// Definir nun producto.

const producto = {
    nombre: "Monitor de 32 pulgadas",
    precio:700
}

const producto2 = {
    nombre:"Celular",
    precio:900
}

carrito.push(producto);
carrito.push(producto2);

const producto3 = {
    nombre:"Teclado",
    precio:150
};
//Para agregar un elemento al comienzo dela rerglo moviendo todo para atras una posicion de usa UNSHIFT
carrito.unshift(producto3);

console.table(carrito);
