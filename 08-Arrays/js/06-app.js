const carrito = [];


const producto = {
    nombre: "Monitor de 32 pulgadas",
    precio:700
}

const producto2 = {
    nombre:"Celular",
    precio:900
}

const producto3 = {
    nombre:"Teclado",
    precio:150
};

// Forma DECLARATIVA con REST OPERATOR (...)
let resultado = [...carrito,producto, producto2];
resultado = [producto3,...resultado];
console.table(resultado);
