function getbyIdx(arr, idx) {
    /* if (idx<0){
        return 'Elemento no existe';
    }
    if (arr.length<=idx){
        return 'Elemento no existe'
    } */

    if (idx < 0 || arr.length <= idx) {
        return 'Elemento no existe';
    }
    return arr[idx];
}

let resultado = getbyIdx([1, 2], 2)
console.log(resultado);