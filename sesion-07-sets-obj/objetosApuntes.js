const obj = {
    id: 4,
    nombre: 'Juan',
    apellido: 'Gonzales',
    isDeveloper : true,
    libros_favoritos: ['El metodo', 'El codigo de la manifestacion'],
    '4-juegos':[1, 2, 3, 4]
}

console.log(obj.id) //asi la llamamos

//llamar con variables declaradas con anterioridad

const prop = 'isDeveloper'
console.log(obj[prop]) //da false


/////////
//Como ordenar listas de objetos en funcion de una propiedad

const listaPeliculas = [
    { titulo:'lo que el viento se llevo', anyo:1939},
    { titulo:'Titanic', anyo:1997},
    { titulo:'Moana', anyo:2016},
    { titulo:'El efecto mariposa', anyo:2004},
    { titulo:'TED', anyo:2012}
]
//Metodo 
//.sort() -> Muta el valor de la lista original

listaPeliculas.sort((a, b) => a.anyo - b.anyo) //Ordena de menor a mayor los años

