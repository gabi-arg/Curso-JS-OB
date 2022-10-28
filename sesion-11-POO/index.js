//POO  es crear objetos para evitar escribir mucho codigo del mismo
//Ej
///Tengo un objeto, el cual me describe una persona, si tengo que hacer lo mismo por cada persona, es escribir mucho codigo, para esto hago:
//Factory function
const persona =  (nombre,edad,isDeveloper) => {
    return{
    nombre,
    edad,
    isDeveloper,
    saludo: function(){
        console.log('Hola')
    }
    }
}/* 
console.log(persona) */
// dsp creo una nueva const llamando la funcion y mandandole los datos que desee
const nueva_persona = persona ('Gabi',35,true);
console.log(nueva_persona);


/////////////////////////////////////

