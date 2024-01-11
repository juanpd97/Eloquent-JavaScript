/*
Cada
De forma análoga al método some, los arrays también tienen un método every (“cada”). Este retorna true cuando la función dada devuelve verdadero para cada elemento en el array. En cierto modo, some es una versión del operador || que actúa en arrays, y every es como el operador &&.

Implementa every como una función que tome un array y una función predicado como parámetros. Escribe dos versiones, una usando un ciclo y una usando el método some.
*/
function cada(array, test) {
  for(elemento of array){
    if(!test(elemento)){
        return false
    }
  }
  return true;
}

function cada2(array, test) {
    return !array.some(elemento => !test(elemento));
  }

console.log(cada([1, 3, 5], n => n < 10));
// → true
console.log(cada([2, 4, 16], n => n < 10));
// → false
console.log(cada([], n => n < 10));
// → true
