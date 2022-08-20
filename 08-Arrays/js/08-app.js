const producto = {
    nombre: "Monitor de 32 Pulgadas",
    precio: 650,
    disponible:true
}

// Destructuring
const {nombre } = producto;

console.log(nombre);

// Destructuring con Arreglos

const numeros = [10,20,30,40,50];

const [primero] = numeros; // su valor esta definido por la posicion asi que el nombre da igual
const[primer, segun, tercer] = numeros;
const[, , , , quinto] = numeros;
const[pri, ...resto] = numeros // aqui desde los ... guarda todo en un arreglo
console.log(primero);
console.log(tercer);
console.log(quinto);
console.log(resto);
