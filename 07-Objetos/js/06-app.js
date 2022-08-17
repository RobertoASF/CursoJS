const producto2 = {
    nombre:'Monitor de 20 pulgadas',
    precio:500,
    disponible:true,
    informacion : {
        medidas: {
            peso:'1 KG',
            medida:'1m',
        },
    
    fabricacion : {
        pais:"China",
    }
    }
}

const {nombre} = producto2;
console.log(nombre);

const {informacion: {fabricacion}} = producto2;
console.log(fabricacion);