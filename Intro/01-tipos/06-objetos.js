let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

//Objeto
//key:value
let personaje = {
    nombre: "Tanjiro",
    anime: "Demon Slayer",
    edad: 16
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 13;

personaje['edad'] = 17;

delete personaje.anime;

console.log(personaje);