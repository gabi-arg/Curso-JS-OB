//Crea un archivo llamado objetos.js que contenga las siguientes líneas
//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const obj = [
    {nombre: 'Gabriela'},
    {apellido: 'Duran'},
    {edad: 35},
    {altura: 1.75},
    {isDeveloper: true}
]

//- Una variable que obtenga tu edad a partir del objeto anterior
const anyo = "edad"
obj[anyo]
//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

const lista = [
    {...obj},
    amiga = [{nombre:'Lucia',apellido: 'Fernandez',edad: 30,altura:1.73,isDeveloper: false}],
    amigo = [{nombre:'Tomas',apellido: 'Perez',edad: 33,altura:1.83,isDeveloper: true}]

]
//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const lista2 = lista.sort((a, b) => a.edad - b.edad) 