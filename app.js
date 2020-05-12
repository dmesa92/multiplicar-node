// const fs = require('express'); no son nátivos de node
// const fs = require('.js'); archivos que hayamos creado
// const fs = require('.js'); nativos
const argv = require("./config/yargs").argv;
const multiplicar = require('./multiplicar/multiplicar.js');
// const colors = require("colors");
const colors = require("colors/safe");

console.log("Base: ", argv.base);

console.log("Limite: ", argv.limite);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        multiplicar.listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        multiplicar.crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log(`Archivo creado: ${colors.green(archivo)}`);
        }).catch(e => console.log(e))
        break;
    default:
        console.log("Comando no reconocido");
}