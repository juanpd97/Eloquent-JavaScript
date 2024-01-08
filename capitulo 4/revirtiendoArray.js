/*
Revirtiendo un array
Los arrays tienen un método reverse que cambia al array invirtiendo el orden en que aparecen sus elementos. Para este ejercicio, escribe dos funciones, revertirArray y revertirArrayEnSuLugar. El primero, revertirArray, toma un array como argumento y produce un nuevo array que tiene los mismos elementos pero en el orden inverso. El segundo, revertirArrayEnSuLugar, hace lo que hace el métodoreverse: modifica el array dado como argumento invirtiendo sus elementos. Ninguno de los dos puede usar el método reverse estándar.

Pensando en las notas acerca de los efectos secundarios y las funciones puras en el capítulo anterior, qué variante esperas que sea útil en más situaciones? Cuál corre más rápido?

 Tu código aquí.

console.log(revertirArray(["A", "B", "C"]));
 → ["C", "B", "A"];
let valorArray = [1, 2, 3, 4, 5];
revertirArrayEnSuLugar(valorArray);
console.log(valorArray);
 → [5, 4, 3, 2, 1]
*/

let arreglo = prompt('ingrese una cadena: ').split('');

function revertirArray(arreglo){
    let arregloAux = [];

    for(let i=arreglo.length-1 ;i>=0 ; i-- ){
        arregloAux.push(arreglo[i]);
    }

    return arregloAux;
}

console.log(`el array inverso es: ${revertirArray(arreglo)} \n el array original es: ${arreglo}`);


function revertirArrayEnSuLugar(arreglo){
    let aux;

    for(let i=0 ;i<arreglo.length/2 ; i++){
        aux=arreglo[i];
        arreglo[i] = arreglo[arreglo.length-1-i];
        arreglo[arreglo.length-1-i] = aux;
    }
    return arreglo;
}

console.log(`el array inverso es: ${revertirArrayEnSuLugar(arreglo)} \n el array original ahora es: ${arreglo}`);
