// METODOS DE LOS STRINGS //
const producto  = 'Monitor de 27 pulgadas';

console.log(producto);

//contar el largo de la cadena de texto
console.log(producto.length);

//saber si existe lo buscado y en que posicion
// si no lo encuentra revuelve -1
console.log(producto.indexOf('pulgadas'));

//saber si existe un string (devuelve true o false)
console.log(producto.includes('pulgadas'));
console.log(producto.includes('Monitor'));
console.log(producto.includes('monitor'));