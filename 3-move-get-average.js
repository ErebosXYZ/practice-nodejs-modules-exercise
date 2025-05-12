/** Leer README */

const utils = require("./mis-utilidades/utils.js");
// const {getAvgFromArray} = utils;
// Podem crear una constant que sigui la desestructuració de l'objecte utils i agafar només la funció que ens interessa.
const array = [1, 2, 3];
const array2 = [10, 20, 30]

console.log(utils.getAvgFromArray(array));
console.log(utils.getAvgFromArray(array2));
console.log(utils)

// També es pot accedir a la funció desitjada directament si utilitzem la funció en la variable utils.