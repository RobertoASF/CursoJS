const producto  = '            Monitor de 27 pulgadas             ';

console.log(producto);
console.log(producto.length);

// para borrar los esapcios en blanco al inicio
console.log(producto.trimStart());
console.log(producto.trimEnd());

//se pueden unir varios metodos
console.log(producto.trimStart().trimEnd());

//se puede borrar todos los espacios al inicio y al final con trim
console.log(producto.trim());