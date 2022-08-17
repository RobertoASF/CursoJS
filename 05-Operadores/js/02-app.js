const numero1 = 20;
const numero2 = "20";
const numero3 = 30;
const numero4 = 30;

// Operador de igualdad (==)

console.log(numero1 == numero3);
console.log(numero1 == numero2); // esto devuelve true, no se fija que son tipos de datos diferentes

// Comparador estricto (===)

console.log(numero1 === numero3); // devuelve false
console.log(numero1 === numero2); // devuelve false
console.log(numero1 === parseInt(numero2)); // pasandole a int devuelve true
console.log(numero3 === numero4); // Este seria el unico que devolveria true

// Diferente se le agrega !== 
const password1 = "admin";
const password2 = "Admin";
console.log(password1 != password2); // devuelve true, son diferentes
console.log(numero1 != numero2); // devuelve false
console.log(numero1 !== numero2); // devuelve true