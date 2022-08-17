
const producto5 = {
    nombre : "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1 kg',
    medida: '1m'
}

console.log(producto5);
console.log(medidas);

// Una forma de convinarlos es con Object.assign

const resultado = Object.assign(producto5, medidas);
console.log(resultado);

// Otra forma es con Spread Operator o Rest operator
// ... es para copiar
const resultado2 = {...producto5, ...medidas};
console.log(resultado);