const producto  = 'Monitor de 27 pulgadas';

//REPEAT -> repite una cadena de texto.
// siempre repite el valor entero redondeado
const texto = ' en promocion'.repeat(2.4);

console.log(texto);
console.log(`${producto} ${texto} !!!`);

// SPLIT
// divide la cadena en una lista delimitada por el valora signado
const actividad = 'Estoy aprendiendo JavaScript Moderno';
console.log(actividad.split(" "));

const hobbies='Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(","));

const tweet = 'Aprendiendo JavaScript #JSModerno';
console.log(tweet.split("#"));