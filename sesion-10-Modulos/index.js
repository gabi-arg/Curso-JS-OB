//importa y exportar modulos
//1. CommonJs -require
//2.ES6 - import
//importar una funcion con la opcion 1
/* const moduloMatematicas = require("./modulos/matematicas.js")
const fact = moduloMatematicas.factorial(5)
console.log (fact) */

///forma de hacerlo sin tanto codigo seria 
const {factorial, suma} = require('./modulos/matematicas.js')
const fact = factorial(5)
console.log (fact)

const sum = suma(12,90)
console.log (sum) 


