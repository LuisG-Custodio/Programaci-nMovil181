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
    [1, { name: "Nicolas" }],
    [2, { name: "Felipe" }],
    [3, { name: "José" }],
];

function toCollection(arr) {
    array = []
    for (v in arr) {
        array[v] = arr[v][1];
        array[v].id = arr[v][0];
    }
    return array;
}

let resultado = toCollection(pares);
console.log(resultado);