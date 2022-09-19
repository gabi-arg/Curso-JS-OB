//sets
const array = [1, 2, 3, 4, 5] //Conj de elementos ordenados
const miSet = new Set(array)//Conj no ordenados de valores unicos
//Diferencia principal es que los sets no permiten tener valores repetidos

//Metodos 
//Para añadir valores .add()

miSet.add(5)

//Para eliminar .delete()

miSet.delete() //()Elemento a eliminar

//para eliminar (limpiar todo el sets)
//.clear

//.has es para averiguar los elementos, similar a includes
//nos larga true o false

//.size que sirve para averiguar la longitud del sets

//Una de las formas para hacer una iteracion del set es igual que el array

miSet.forEach(valor => {
    console.log(valor)
})

//Otra forma es usando values

const it_miSet = miSet.values()


//la forma de convertir en un array el set se realiza con el factor de propagacion
const ar_miSet = [...miSet]
