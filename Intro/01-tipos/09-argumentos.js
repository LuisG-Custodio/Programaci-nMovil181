//funcion nombre(argumento){}
function suma(a, b = 2) {
    console.log(arguments);
    return a + b;
}

//nombre(parametro)
let resultado = suma(5);

console.log(resultado);

resultado = suma(5, 6);

console.log(resultado);

resultado = suma(5, 6, 1, 7, 8, 9);