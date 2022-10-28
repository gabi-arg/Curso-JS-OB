//clases en js
// a las variables o funciones dentro de una clase se llama metodos
//el metodo por defecto para crear una clase es constructor()
class Persona {
    constructor(nombre,edad,isDeveloper){
        this.nombre = nombre
        this.edad = edad
        this.isDeveloper = isDeveloper
    }
    saludo(){
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`)
    }
}
//cdo usamos new es crear un nuevo objeto pero si le agregamos el nombre de alguna clase , creamos una clase
const nueva_persona = new Persona('Gabi', 35, true)

console.log(nueva_persona)
nueva_persona.saludo()

///////////////////////

let numero = 60 //inicializar

let persona2 = new Persona('Oscar', 38, false)//instanciar

//instanceof= similar a tyof pero para clases

console.log(typeof persona2)
console.log(persona2 instanceof Persona)
