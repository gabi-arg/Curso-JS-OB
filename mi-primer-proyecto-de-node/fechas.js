//Crea un archivo llamado fechas.js que contenga las siguientes líneas
//- La fecha de hoy

fechaDeHoy = new Date()

//- La fecha de tu nacimiento
fechaDeNac = new Date (1987,5,28)

//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

const fecha = fechaDeHoy > fechaDeNac

//- Una variable que contenga el día de tu nacimiento

const diaNacimiento = fechaDeNac.getDate()

//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

const mesNacimiento = fechaDeNac.getMonth()+1

//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)

const anioNacimiento = fechaDeNac.getFullYear()