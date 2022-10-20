//formas de importar/ exportar modulos

import getAutor from './modulos/literatura.js'
import { suma } from './modulos/matematicas.js'
const sum = suma(4, 12)
console.log(sum)
//tambien podemos exportar constantes

//importar todo el modulo 
import * as moduloMatematicas from './modulos/matematicas.js'
console.log(moduloMatematicas.nombre)
console.log(getAutor())

