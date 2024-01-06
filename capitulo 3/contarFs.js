/*
Escribe una función contarFs que tome un string como su único argumento y devuelva un número que indica cuántos caracteres “F” en mayúsculas haya en el string.

Despues, escribe una función llamada contarCaracteres que se comporte como contarFs, excepto que toma un segundo argumento que indica el carácter que debe ser contado (en lugar de contar solo caracteres “F” en mayúscula). Reescribe contarFs para que haga uso de esta nueva función.
*/

let cadena = prompt('ingrese una cadena:');
let letra = prompt('ingrese una letra');

let contarFs = (cadena,letra) => {

    let cont=0;
    for(let i=0 ; i < cadena.length ; i++){
        if(cadena[i] === letra){
            cont++;
        }
    }
    return cont; 
};

alert(contarFs(cadena,letra));