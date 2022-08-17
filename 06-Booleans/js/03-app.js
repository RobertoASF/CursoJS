let autenticado = true;

if(autenticado){  // esta linea es mejor que poner if(autenticado == true)
    console.log('si puedes ver Netflix')
}else{
    console.log('no puede ver Netflix')
};

// Operador ternario (mucho mejor)
console.log(autenticado ? 'si esta autenticado' : 'no esta autenticado');