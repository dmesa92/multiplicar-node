"use strict"
const fs = require('fs');
const color = require("colors");

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido: ${base} no es un numero`);
            return;
        }
        let data = ""
        if (!Number(limite)) {
            limite = 10;
        }
        console.log("=================".green);
        console.log(`Tabla de ${base}`.green);
        console.log("=================".green);

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} =  ${base* i}`);
        }
        resolve("OK");
    })

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido: ${base} no es un numero`);
            return;
        }
        let data = ""

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} =  ${base* i} \n`;
        }
        let rutaArchivo = `tablas/tabla-${base}.txt`;
        fs.writeFile(rutaArchivo, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(rutaArchivo);
        });
    })
}



module.exports = {
    crearArchivo,
    listarTabla
}