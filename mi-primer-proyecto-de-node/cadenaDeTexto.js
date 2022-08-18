/* Crea un archivo JS que contenga las siguientes líneas 
 - Una cadena de texto con tu Nombre */
let nombre = 'Gabriela';
/* - Otra cadena de texto con tu Apellido */
let apellido = 'Duran';
/* - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias */
let estudiante = nombre + " " + apellido;
/* - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas */
let estudianteMayus = estudiante.toUpperCase;
/* - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas */
let estudianteMinus = estudiante.toLowerCase;
/* - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios */
var cadena = estudiante.length;
/* - Una variable que contenga la primera letra del Nombre */
var primerLetra = estudiante[0];
/*- Otra variable que contenga la última letra del Apellido */
var ultimaLetra = estudiante[8];

/* - Una cadena de texto que elimine los espacios de la variable "estudiante" */
estudiante.trim()
/*- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante" */

var booleana = estudiante.includes(nombre);