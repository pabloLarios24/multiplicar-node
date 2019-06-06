const fs = require('fs');
const colors = require('colors')


let crearArchivo = async (base , limite) =>{
    return new Promise( ( resolve , reject )=>{
        let data = ""

        if(!Number(base)){
            reject(`El valor introducido ${ base } no es un número`)
            return;
        }

        for ( let i = 0 ; i <= limite ; i ++){
            data += (`${base} * ${i} = ${base * i} \n`)
        }
    
        return fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) reject(err)
            else
                 resolve(`tabla-${ base }.txt`);
        });
    })
}

let listar = ( base , listar ) => {
    let info = "";
    for(let i = 0; i<=listar ; i++){
        info+=`${ base } * ${ i } = ${ base * i } \n`
    }
    console.log(info.yellow)
}

module.exports = {
    crearArchivo,
    listar
}