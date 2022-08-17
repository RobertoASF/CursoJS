// Object literal

const producto6 = {
    nombre : "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
  
}

// Object constructor

function Producto(nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto8 = new Producto("Monitor de 27 Pulgadas", 300000);
console.log(producto8);