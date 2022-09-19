//Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

//- Un nuevo Set con los nombres de tu familia
const arrayFamily = ['Oscar', 'Valentino', 'Agustin', 'Luciano','Gabriela']
const setFamily =  new Set(arrayFamily)

//- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

const setDuplicado = setFamily.add('Luciano')

//- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)

const newSet = setFamily.add('JavaScript')