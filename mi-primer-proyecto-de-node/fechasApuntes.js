const fecha = new Date()//de esta forma inicializamos la fecha actual

const fecha2 = new Date(1987, 5, 15)// para inicializar una fecha puntual
//se marca fecha años, mes, dia los meses inician en 0 (0-enero,11-diciembre)

const fecha3 = new Date(0)//definir por milisegundos
//Poniendo cero nos devuelve 1 de enero de 1970

const fecha4 = new Date('october 1, 1979')//Defnir con string

//comparar dos fechas

//se puede compara si una fecha es antes o dsp que otra

//se puede compara con > < no se puede comparar con ===

//con === tenemos que usar
const fecha5 = new Date(1987, 10, 20, 1, 25, 52, 192)

fecha === fecha5 //Asi no se compara

fecha2.getTime() === fecha5.getTime()

//Obtener el dia, mes, y el año de una fecha

//Dia-> get.Date()
//Mes -> get.Month() +1 porque los meses empiezan desde 0s
//Año-> get.FullYear()

//Mostrar fecha en un string

//.toLocaleDateString
//https://developer.mozzilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDataString