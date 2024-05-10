let user = {
    id: 1,
    name: "Luis",
    age: 29
}

for (let prop in user) {
    console.log(prop, user[prop]);
}

let animales = ['perro', 'gato', 'tortuga'];

for (let indice in animales) {
    console.log(indice, animales[indice]);
}