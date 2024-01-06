/*
Define una función recursiva esPar que corresponda a esta descripción. La función debe aceptar un solo parámetro (un número entero, positivo) y devolver un Booleano.
*/

let x = prompt('ingrese un numero:');

const esPar = (n) => {
    if(n==0){
        return true;
    } else if(n==1){
        return false;
    } else if(x<0){
        return esPar(-n);
    } else return esPar(n-2);
};

alert(esPar(x));