const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

// con typeof podemos ver el tipo de dato (como el type de python)
console.log(typeof(numero1));
console.log(typeof(numero4));


console.log(numero1);
console.log(numero2);
console.log(numero3);
console.log(numero4);


// Convertir a numero

console.log(Number.parseInt(numero1));
console.log(Number.parseFloat(numero2));
console.log(Number.parseInt(numero3)); // este devuelve NaN

// Validar si un valor es un numero entero o no
console.log(Number.isInteger(numero4)); // devuelve true
console.log(Number.isInteger(numero3)); // devuelve false





