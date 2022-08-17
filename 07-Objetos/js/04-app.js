const producto = {
    nombre:'Monitor de 20 pulgadas',
    precio:500,
    disponible:true,
    imagen:"imagen.jpg"

}

// Extraer el valor de nombre
const nombre = producto.nombre;

console.log(producto.nombre);
console.log(nombre);

//esta forma extrae el valor en un solo paso. (Destructuring)
const {precio} = producto;
console.log(precio);

const {disponible, imagen} =producto; // aqui se saca mas de una variable
console.log(disponible);
console.log(imagen);