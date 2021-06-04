const fs = require('fs');
const colors = require('colors');

// colors.enable();

const crearArchivo = async(base, l, h) => {
    try {
        let salida = '';

        for (i = 1; i <= h; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        if (l) {
            console.log('============================'.magenta);
            console.log(colors.cyan('        Tabla del: %s'), base);
            console.log('============================'.magenta);
            console.log(salida.cyan);
        }

        fs.writeFileSync(`./tablas/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch(err) {
        throw err;
    }  
}

module.exports = {
    crearArchivo
}