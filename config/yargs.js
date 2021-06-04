const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        // demandOption: true,
        default: 5,
        describe: 'Es la base de la tabla'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Imprime la tabla hasta ese numero'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .check((argv, options) => {
        if (isNaN( argv.b )) {
            throw 'La base tiene que ser un numero'.red;
        } 
        return true
    })
    .argv;

module.exports = argv;