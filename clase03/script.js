'use strict'

let nombre;
let edad;




    do {
        edad = parseInt(prompt("ingrese su edad"));
        nombre = prompt("ingrese el nombre");
        if (edad>=18){
            console.log("hola "+nombre);
            console.log("el listado de productos se solicita al 11223344");

        }else{
            break;
        }
        
    } while (edad >= 18);

    console.log("hola "+nombre+" no se venden bebidas a menores de edad");
    


