const meses = ['Enero', 'Febrero', 'Marzo','Abril','Mayo','Junio','Julio'];


// Modificar un elemento del Arreglo
meses[0] = 'Thermidor';

// Agregar un elemento nuevo

meses[7] = 'Augustus';
meses[9] = 'Oktuvre'; // si me salto un indice del arreglo se crea igual en la posicion indicada
console.table(meses);