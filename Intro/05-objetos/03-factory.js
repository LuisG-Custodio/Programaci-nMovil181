/* let user1 = {
    id: 1,
    email: 'example1@email.com',
    name: 'Luis',
    activo: true,
    recuperarClave: function () {
        console.log("Recuperando clave...")
    }
}; */

/* let user2 = {
    id: 2,
    email: 'example2@email.com',
    name: 'Juan',
    activo: false,
    recuperarClave: function () {
        console.log("Recuperando clave...")
    }
}; */

function crearUsuario(name, email) {
    return {
        email: email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log("Recuperando clave...")
        }
    };
}

let user1 = crearUsuario('Luis', 'example1@email.com')
let user2 = crearUsuario('Juan', 'example2@email.com')

console.log(user1);
console.log(user2);