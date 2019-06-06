const argv = require ('./config/yargs').argv;
const colors = require('colors')
let {crearArchivo , listar} = require('./multplicar/multiplicar');

let comando = argv._[0];


switch ( comando ) {
    case 'listar':
            listar(argv.base , argv.limite )
        break;
    case 'crear':
            crearArchivo(argv.base , argv.limite)
                .then(archivo =>console.log(`archivo creado: ${colors.green( archivo )}`))
                .catch( err => console.log(err))
        break;
    default:
        console.log('No se encontro el comando')
        break;
}



/*

  */