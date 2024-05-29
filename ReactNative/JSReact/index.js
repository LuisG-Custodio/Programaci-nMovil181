console.log('Hola consola');

// Funciones

//Tradicional

function suma(a, b) {
    return a + b;
}

//Fat arrow
// const resta = (a, b) => { return a - b }

//Fat arrow simplificada
const resta = (a, b) => a - b


console.log(suma(1, 10));
console.log(resta(5, 1));

//Objetos
const usuario = {
    nombre: 'Luis',
    apellido: 'Custodio',
    edad: 29,
    direccion: 'Palacio de Gobierno'
}

console.log(usuario);