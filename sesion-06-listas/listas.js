//como trabajar con listas
let var1 = { id: false}
let array = [1, 'hola', false, {id:5}, null, undefined, var1]
console.log(array)

//Acceder a los valores de un array a travez de su posicion
//array [indice] > 0,1,2,3,4.....
//Ejemplo
console.log (array[0]);

//Metodo para introducir nuevos valores 
//.push() . unshift() >Mutan el valor de nuestro array

//Valores al final. Pdemos agregar todos los elementos que queramos
array.push('final')
//valores al principio. Igual que el final
array.unshift('inicio')

//Metodos para eliminar valores
//.pop() .shift( > Mutan el valor del array)
const array2 = [1, 3, 'hola,']
//valores al final 
array2.pop()
//valores al inicio
array2.shift()

//Metodo para eliminar, modificar o añadir valores en nuestro array
// .splice (x,y,z) 

const array3 = [1, 2, 3, 4, 5, 6]

//Eliminar valores .splice(indice, numValoresAEliminar)
array3.splice(2, 1);
//Elimino el indice dos y solo se elimina un solo valor

//Añadir valores .splice(indice, 0, valores)
array3.splice(2, 0,'hola')
//Indico agregar en el indice 2 , como no quiero eliminar nada agrego 0 y agrego el valor que quiero agregar
//para modificar en el numero del medio se agrega la cantidad de valores a eliminar
array3.splice(2, 1, 3)

//Concatenación y obtención de fragmentos de listas
//Como unir dos listas > .concat(lista2)

const lista1 = ['hola', 2, false, null]
const lista2 = ['adios', 8, true, undefined]
console.log(lista1.concat(lista2))

//ota forma es creando una const

const lista3 = lista1.concat(lista2)

//otra forma es con el factor de propagacion

const lista4 = [...lista1, ...lista2]
console.log(lista4)

//com obtener una lista a partir de otra .slice()

const arrayA = ['hola', 1, 2, 3, true, null, 'adios']
console.log(arrayA.slice(1))//el numero del parentesis es el indice que le indicamos desde donde queremos que muestre, si ponemos dos numeros el primero es donde empiza y el otro donde termina.


//Metodos avanzados
//.map() .filter() .reduce()

const arrayB = ['San Sebastian', 'Madrid','Barcelona', 'ALicante', 'Bilbao']
//para ver cada elemento
arrayB.fotEach(v => {console.log(v)})

//para modificar los valores que tenemos en la lista .map()

const newArray = arrayB.map((valor, indice)=>`${indice + 1 } - ${valor}`)

//.filter  > filtrar objetos

const listaObjetos = [
    {nombre: 'Laura', edad: 30},
    {nombre: 'Tomas', edad: 3},
    {nombre: 'Pablo', edad: 35},
    {nombre: 'Juana', edad: 29},
    {nombre: 'Lucia', edad: 27}
]
/*const personasMayores = listaObjetos.filter(obj => {
    if(obj.edad > 30){
        return true
    } else {
        return false
    }
})*/
//Forma de hacerlo mas resumido 
const personasMayores = listaObjetos.filter(obj => obj.edad > 30 )

//otra opcion para usar .filter()

const nuevaLista = listaObjetos.filter(obj => obj.nombre != 'Lucia')

//utilizar .reduce

const valores = [3, 56, 23, 5, 90, 100]
const suma = valores.reduce((ant, cur, i, arrayOriginal))

console.log(acumulado) //acumulativo
console.log(cur)
