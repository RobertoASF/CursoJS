// Variables //
// existen 3 formas de crear variables //

//la forma con var ya no se usa

// inicializar variables con un valor
var producto = "Monitor de 24 pulgadas"; 
console.log(producto);

// se pueden usar comillas simples o dobles
//la variables se pueden reasignar
producto = 'Monitor de 27 pulgadas'; 
console.log(producto);

// JS es dinamico, las variables pueden cambiar de tipo
producto = 20;
console.log(producto);

//se puede inicializar sin valor y asignar valor despues
var disponible;
disponible = true;
disponible = false;

//Inicializar multiple variables
var categoria   = 'Computadoras';
var marca       = 'Asus';
var calificacion= 5;

var categoria   = 'Computadoras',
    marca       = 'Asus',
    calificacion= 5;

//las variables no pueden comenzar con numero

var nombreProducto ; // en JS se usa camelCase para variables
var nombre_producto;
var NombreProducto; // se usa en clases
