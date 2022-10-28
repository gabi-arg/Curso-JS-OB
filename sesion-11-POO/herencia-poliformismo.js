//Herencia

class Persona {
    constructor(nombre, edad) {
            this.nombre = nombre
            this.edad = edad
        }
        saludo(){
            console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`)
        }
}
//esta es una  clase que deriva de la clase principal
class Desarrollador extends Persona{
    constructor(nombre, edad, lenguaje) {
        super(nombre,edad)
        this.lenguaje = lenguaje
    }
    
    
}
const nuevodev = new Desarrollador('Agus', 18, 'JS')
console.log(nuevodev)

//Polimorfismo --> Varias formas