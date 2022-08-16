// CONCATENACION

const producto  = 'Monitor de 27 pulgadas';
const precio    = '30 USD';


console.log(producto.concat(precio));
console.log(producto.concat('en descuento!!!'));

console.log(producto + precio);
console.log(producto +' precio de '+ precio);
console.log('el producto '+ producto +' cuesta '+ precio);
console.log('el producto', producto ,'cuesta', precio); //con coma agrega un espcio

//template string
console.log(`El producto ${producto} tiene un precio de ${precio}`);
