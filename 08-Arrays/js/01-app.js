// Ejemplo de arreglos
const numeros = [10,20,30];
// Diferencia con un objeto
const producto = {
    nombre: "Monitor",
    precio: 500
};

const meses = new Array ('Enero', 'Febrero', 'Marzo');
console.log(numeros);
console.log(meses[0]);

//Arreglo que contiene datos de todo tipo
const deTodo = ["Hola",10,'si', true, null,{nombre:'Juan', edad:25}, [1,2,3]];
console.log(deTodo);
console.table(meses); // mostrar como table


// Acceder a un elemento dela rreglo
console.log(meses[0]); // porimera posicion es 0

//Acceder a un elemento que esta en una lista dentro de una lista
const arregloEnArreglo = ['Enero', 'Febrero', 'Marzo',[1,2,3,4,5,6,7,8,9]];
console.log(arregloEnArreglo[3][5]); 