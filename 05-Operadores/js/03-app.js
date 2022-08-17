// Undefined
let num;
// aqui la variable esta definida pero su valor no, por lo tanto devuelve undefined
console.log(num);
console.log(typeof(num));

// Null
let num2 = null;
console.log(num2);  // devuelve null
console.log(typeof(num2)); // devuelve que es un objecto

console.log(num == num2); // devuelve true (?)
console.log(num === num2); // este devuelve false

// mejor ir utilizando el comparador estricto