/*
Ejercicios
La suma de un rango
Escribe una función rango que tome dos argumentos, inicio y final, y retorne un array que contenga todos los números desde inicio hasta (e incluyendo) final.

Luego, escribe una función suma que tome un array de números y retorne la suma de estos números. Ejecuta el programa de ejemplo y ve si realmente retorna 55.

Como una misión extra, modifica tu función rango para tomar un tercer argumento opcional que indique el valor de “paso” utilizado para cuando construyas el array. Si no se da ningún paso, los elementos suben en incrementos de uno, correspondiedo al comportamiento anterior. La llamada a la función rango(1, 10, 2) deberia retornar [1, 3, 5, 7, 9]. Asegúrate de que también funcione con valores de pasos negativos para que rango(5, 2, -1) produzca [5, 4, 3, 2].
*/


//Escribe una función rango que tome dos argumentos, inicio y final, y retorne un array que contenga todos los números desde inicio hasta (e incluyendo) final.

function rango(inicio,fin){
    let rta = [];
    for(let i=inicio ; i<=fin ;i++){
        rta.push(i);
    } return rta;
};

let a = parseInt(prompt('ingrese el primer valor del rango:'));
let b = parseInt(prompt('ingrese el ultimo valor del lango:'));

console.log(rango(a,b));

//Luego, escribe una función suma que tome un array de números y retorne la suma de estos números. Ejecuta el programa de ejemplo y ve si realmente retorna 55.

function suma(...numeros){
    let suma = 0;
    for(let num of numeros){
        suma += num;
    }
    return suma;
};

console.log(`la suma del rango es: ${suma(...rango(a,b))}`);

//Como una misión extra, modifica tu función rango para tomar un tercer argumento opcional que indique el valor de “paso” utilizado para cuando construyas el array. Si no se da ningún paso, los elementos suben en incrementos de uno, correspondiedo al comportamiento anterior. La llamada a la función rango(1, 10, 2) deberia retornar [1, 3, 5, 7, 9]. Asegúrate de que también funcione con valores de pasos negativos para que rango(5, 2, -1) produzca [5, 4, 3, 2].

function rango2(inicio,fin,valorPaso = 1){

    let rta = [];

    if(fin>inicio){
    for(let i=inicio ; i<=fin ;i+=valorPaso){
        rta.push(i);
        }  
    }else { 
        for(let i=inicio ; i>=fin ;i+=valorPaso){
            rta.push(i);
            }
        }
    return rta;
};

let c = parseInt(prompt('ingrese un valor de "paso":'));
console.log(`rango con valor de paso: ${rango2(a,b,c)}`);