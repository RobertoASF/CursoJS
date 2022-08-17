// Math es un abjeto con muchas funciones

console.log(Math.PI); // devuelve 3.141592653589793
console.log(Math.E); // devuelve 2.718281828459045
let resultado;

// Redondear
resultado = 2.2;
console.log(Math.round(resultado)); // deveulve 2

resultado =2.8;
console.log(Math.round(resultado)); // devuelve 3

resultado =2.5;
console.log(Math.round(resultado)); // devuelve 3

// Redondear hacia arriba (ceil)
resultado = 2.1;
console.log(Math.ceil(resultado)); // devuelve 3

// Redondear hacia abajo (floor)
resultado = 2.8;
console.log(Math.floor(resultado)); // devuelve 2

// Raiz cuadrada
resultado = Math.sqrt(9); // devulve la raiz cuadrada de 9, en este caso 3
console.log(resultado);

// Valor absoluto (abs)
resultado = Math.abs(-650); // devuelve el numero ignorando el signo
console.log(resultado);

// Potencia
resultado = Math.pow(8,3); // primero la base luego el exponente
console.log(resultado);

// Minimo
resultado = Math.min(3,4,5,6,7,8,2,9); // devuelve el minimo
console.log(resultado);

// Maximo
resultado = Math.max(3,4,5,6,7,8,2,9); // devuelve el minimo
console.log(resultado);

// Random
resultado = Math.random(); // devuelve un numero pseudo aleatorio entre 0 y 1
console.log(resultado);

// Aleatorio dentro de un rango
resultado = Math.floor(Math.random() * 30) // devolveria un numero aleatorio entre 0 y 30
console.log(resultado);

