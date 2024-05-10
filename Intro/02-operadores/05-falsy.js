//short circuit

//Falso
/*
false
0
''
null
undefined
NaN
*/

let nombre = '';
let username = nombre || 'Anonimo';
console.log(username);

nombre = 'Luis';
username = nombre || 'Anonimo';
console.log(username);

function fn1() {
    console.log('Soy funcion 1');
    return true;
}

function fn2() {
    console.log('Soy funcion 2');
    return true;
}

let x = fn1() && fn2();
console.log(x);

function fn3() {
    console.log('Soy funcion 3');
    return false;
}

x = fn3() && fn2();
console.log(x);