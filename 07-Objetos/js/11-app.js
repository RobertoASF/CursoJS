let nombre = "pepito";
let precio = 6550;

const producto6 = {
    nombre : "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto ${this.nombre} tiene un precio de: ${this.precio}  `)
    }
}

const producto7 = {
    nombre : "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto ${nombre} tiene un precio de: ${precio}  `)
    }
}
// el this lo que hace es referenciar una propiedad del mismo objeto
producto6.mostrarInfo(); 
producto7.mostrarInfo(); 
/* si no se agrega el this lo que mostrara la funcion sera el nombre = pepito
al utilizar el this buscara el valor de nombre dentro del objeto y devovlera Monitor.... 
*/