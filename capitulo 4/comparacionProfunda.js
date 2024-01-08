/*
El operador == compara objetos por identidad. Pero a veces preferirias comparar los valores de sus propiedades reales.

Escribe una función igualdadProfunda que toma dos valores y retorne true solo si tienen el mismo valor o son objetos con las mismas propiedades, donde los valores de las propiedades sean iguales cuando comparadas con una llamada recursiva a igualdadProfunda.

Para saber si los valores deben ser comparados directamente (usa el operador == para eso) o si deben tener sus propiedades comparadas, puedes usar el operador typeof. Si produce "object" para ambos valores, deberías hacer una comparación profunda. Pero tienes que tomar una excepción tonta en cuenta: debido a un accidente histórico, typeof null también produce "object".

La función Object.keys será útil para cuando necesites revisar las propiedades de los objetos para compararlos.
*/

/*
let objeto = {aqui: {hay: "un"}, objeto: 2};
console.log(igualdadProfunda(objeto, objeto));
 → true
console.log(igualdadProfunda(objeto, {aqui: 1, object: 2}));
 → false
console.log(igualdadProfunda(objeto, {aqui: {hay: "un"}, objeto: 2}));
 → true
*/

let objeto = {aqui: {hay: "un"}, objeto: 2};
console.log(igualdadProfunda(objeto, objeto));
console.log(igualdadProfunda(objeto, {aqui: 1, object: 2}));
console.log(igualdadProfunda(objeto, {aqui: {hay: "un"}, objeto: 2}));


function igualdadProfunda(obj1,obj2){

    if(obj1 === obj2){
        return true;

    } else if(typeof(obj1) == typeof(obj2) && (obj1 !== null) && (obj2 !== null) ){
        obj1Aux = Object.keys(obj1);
        obj2Aux = Object.keys(obj2);

        for(let i=0 ; i<obj1Aux.length ;i++){
            if(obj1Aux[i] !== obj2Aux[i]){
                return false;
            }
        }
        return true;
    } else return false;
}