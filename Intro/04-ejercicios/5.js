let array = [999, 5, 7, 15, -5, -100, 55]
function getMenorMayor(arr) {
    let a = arr[0];
    let b = arr[0];
    for (num of arr) {
        console.log(num)
        a < num ? a = num : a;
        b > num ? b = num : b;
    }
    array = [a, b]
    return (array)
}

let numeros = getMenorMayor(array)
console.log(numeros);