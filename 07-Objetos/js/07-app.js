// pesar de delcararse con const un objeto si puede mutar sus propeidades

const producto3 = {
    nombre : "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

producto3.disponible = false;
delete producto3.precio;

console.log(producto3);