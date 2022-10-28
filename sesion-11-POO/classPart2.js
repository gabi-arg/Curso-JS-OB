class Persona {

    //cdo queremos proteger  las variables dentro de la clase, usamos Private => #
    #nombre
    #edad
    #obtenedad

    //Protected => _
    _isDeveloper = true
    constructor(nombre,edad){
        this.#nombre = nombre
        this.#edad = edad
        
    }
    saludo(){
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`)
    }
    obtenNombre(){
        return this.#nombre
    }
    obtenedad(){
        return this.#edad
    }
}
//los metodos -->
//privados (privated)= solo se pueden accder desde adentro de la clase
//protegido (protected) = solo se pueden accder desde adentro de la clase y desde la clase descendiente
const persona = new Persona ('Lucia', 40)
/* console.log(persona)
console.log(persona.nombre) */
persona.saludo()
console.log(persona.obtenNombre())
console.log(persona.obtenedad())