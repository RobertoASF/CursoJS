// Orden en que se ejecutan las operaciones
let resultado;

resultado = 20 + 30 * 2; // se ejecuta primera la multiplicaicon, luego la suma
console.log(resultado);

resultado = (20 + 30) * 2; // se ejecuta primero el parentesis, luego el resto
console.log(resultado);

// 20% de descuento en carrito de compra
resultado = (20 + 30 + 40 + 50 + 60) * .2; // se calcula el valor de ese 20%
console.log(resultado); // corresponde al valor del 20%

// Impuesto del IVA (19%)

resultado = Math.round((100 + 50 +40+ 150 + 40) * 1.19); // se le agrega el % de impuesto
console.log(resultado);