function cualEsMayor(a, b) {
    /* if (a > b)
        return a;
    else if (a < b)
        return b;
    else
        return 'Son iguales'; */

    if (a == b) {
        return 'Son iguales';
    }
    else {
        return (a > b) ? a : b;
    }
}

let mayor = cualEsMayor(10, 20);

console.log(mayor);