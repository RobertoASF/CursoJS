"use strict";

const producto4 = {
    nombre : "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

// Con seal no se peuden agregar o quitar propiedades pero si se peuden modificar las existentes
Object.seal(producto4); 
//producto4.imagen = "imagen.jpg";
 producto4.disponible = false; // este se permite con seal
// delete producto4.precio;


console.log(producto4);

console.log(Object.isSealed(producto4));