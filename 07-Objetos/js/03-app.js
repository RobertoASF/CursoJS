const producto = {
    nombre:'Monitor de 20 pulgadas',
    precio:500,
    disponible:true
    
}

// Agregar nuevas propiedades al objecto, simplemente desde fuera del objeto utilizando sinteaxis de punto
producto.imagen = "imagen.jpg"

// Eliminar algun propiedades del objeto
delete producto.disponible;

console.log(producto);



