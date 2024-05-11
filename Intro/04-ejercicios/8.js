let array = [{
    id: 1,
    name: 'Nicolas'
}, {
    id: 2,
    name: 'Felipe'
}, {
    id: 3,
    name: 'José'
}];

let pares = [
    [1, { id: 1, name: "Nicolas" }],
    [2, { id: 2, name: "Felipe" }],
    [3, { id: 3, name: "José" }],
];

function toPairs(arr) {
    pares = []
    for (idx in arr) {
        pares[idx] = [arr[idx].id, arr[idx]];
    }
    return pares;
}

let resultado = toPairs(array);
console.log(resultado);