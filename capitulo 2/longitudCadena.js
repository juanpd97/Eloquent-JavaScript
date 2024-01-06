/*
Puede ser útil saber que puedes encontrar la longitud de un string escribiendo .length después de él:

let abc = "abc";
console.log(abc.length);
 abc → 3
*/

let cadena = prompt('ingrese una cadena:');
let longitud = 0;
for(let i=0; i<cadena.length; i++){
    longitud++;
}

console.log(longitud);
console.log(cadena.length);
