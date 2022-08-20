const carrito = [];

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

const producto4 = {
    nombre: "Audifonos",
    precio:220
}

carrito.unshift(producto3);

// Eliminar ultimo elemento de un arreglo
console.table(carrito);
carrito.pop(); //elimina ultimo elemento
console.table(carrito);

// Eliminar primer elemento del arreglo
carrito.shift(); 
console.table(carrito);

carrito.push(producto2);
carrito.push(producto3);
carrito.push(producto4);
console.table(carrito);

// Metodo splice
// toma dos argumentos, posicion inicial y cantidad de elemntos a eliminar
carrito.splice(2,2);
console.table(carrito);