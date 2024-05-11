const user = { id: 1 };

user.name = 'Luis';
user.guardar = function () {
    console.log('Guardando', user.name);
}

user.guardar();

delete user.name;
delete user.guardar;
console.log(user);

//Fija vampos y valores
//const user1 = Object.freeze({ id: 1 });
//fija solo campos
const user1 = Object.seal({ id: 1 });
user1.name = 'Luis';
user1.id = 2;
console.log(user1)
