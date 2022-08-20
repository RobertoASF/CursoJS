const meses = ['Enero', 'Febrero', 'Marzo','Abril','Mayo','Junio','Julio'];
console.table(meses);

// saber longitud del Arreglo
console.log(meses.length); // este INICIA en 1

const largo = meses.length;

//for es una FUNCION tiene 3 partes, valor de inicio, cuantas veces quieres que se ejecute
for(let i = 0; i < largo; i++) {
    console.log(meses[i]);
}