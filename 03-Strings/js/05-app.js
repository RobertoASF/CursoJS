// REEMPLAZAR TEXTO
const producto  = 'Monitor de 27 pulgadas';
console.log(`El largo del string es de ${producto.length}`)
// replace recibe de primer argumento els tring a reemplazar, de segundo el nuevo valor
console.log(producto.replace('pulgadas','"'));
console.log(producto.replace('Monitor','Monitor curvo'));


// METODO SLICE -> cortar una cadena de texto
// 2 argumentos, inicio y fin, si solo se da 1 argmento toma desde ese hasta el fin
// si el primer numero es mayor al segundo simplemnte no hara nada
console.log(producto.slice(10,22));


// SUBSTRING
// al tener un mayor primero los invierte
console.log(producto.substring(10,22));
console.log(producto.substring(22,18));
console.log(producto.substring(18,22));

//mostrar solo el primer caracter
console.log(producto.substring(0,1));
console.log(producto.charAt(0));