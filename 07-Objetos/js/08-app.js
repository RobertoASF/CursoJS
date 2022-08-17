"use strict";

const producto4 = {
    nombre : "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

Object.freeze(producto4); // con esto este objeto sea constante y no permite modificarlo

producto4.imagen = "imagen.jpg";
producto4.disponible = false;
delete producto4.precio;


console.log(producto4);

// Como hacer que un objeto sea realemnte consatnte
// para eso se usa el modo estricto

console.log(Object.isFrozen(producto4)); // devuelve true o false si el objeto esta en freeze