/*
Use el método reduce en combinación con el método concat para “aplanar” un array de arrays en un único array que tenga todos los elementos de los arrays originales.

let arrays = [[1, 2, 3], [4, 5], [6]];
 Tu código aquí.
 → [1, 2, 3, 4, 5, 6]
*/

let arrays = [[1, 2, 3], [4, 5], [6]];

let aplanar = arrays.reduce((acumulador,elemento) => {return acumulador.concat(elemento);});


console.log(aplanar);