const producto = {
    nombre:'Monitor de 20 pulgadas',
    precio:500,
    disponible:true,
    informacion : {
        peso:'1 KG',
        medida:'1m'
    },
    facricacion : {
        pais:"China",
        año:2020
    }

}

console.log(producto);

console.log(producto.informacion);
console.log(producto.informacion.peso);
console.log(producto.informacion.medida);