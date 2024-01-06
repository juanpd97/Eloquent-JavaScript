/*
Mínimo
El capítulo anterior introdujo la función estándar Math.min que devuelve su argumento más pequeño. Nosotros podemos construir algo como eso ahora. Escribe una función min que tome dos argumentos y retorne su mínimo.

// Tu codigo aqui.

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
*/

let x = prompt('valor del 1er numero:');
let y = prompt('valor del 2do numero:');

console.log('el valor minimo es:' , min(x,y));

function min (x,y){

    if(x<=y){
        return x;
    } else {
        return y;
    }
};

