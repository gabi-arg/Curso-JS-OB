//que son, como se declaran y como se utilizan
//Ejemplo:

//invoco
saludar('Gabi')
//declarar funcion
function saludar(nombre){//()dentro se colocan los parametros
    console.log(`hola ${nombre}`)

}


//funciones tipo flecha-funciones anonimas

const array = [1,5,6,2,7,12,8,92]
//funcion colbac
const array2 = array.map(function(valor){
    return valor * 2
}
)
console.log(array2)

//misma funcion mas abreviada

const array3 = array.map((valor) => valor * 2)
console.log(array3)


//funciones flecha

const dobleDelValor = valor => valor * 2