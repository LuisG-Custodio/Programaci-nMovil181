let accion = 'listar'

switch (accion) {
    case 'listar':
        console.log('Accion de listar');
        break;
    case 'guardar':
        console.log('Accion de guardar');
        break;
}

accion = 'guardar'

switch (accion) {
    case 'listar':
        console.log('Accion de listar');
        break;
    case 'guardar':
        console.log('Accion de guardar');
        break;
}

accion = ''

switch (accion) {
    case 'listar':
        console.log('Accion de listar');
        break;
    case 'guardar':
        console.log('Accion de guardar');
        break;
    default:
        console.log('Accion default');
        break;
}