//Crea un archivo JS que contenga las siguientes líneas
// Una variable que contenga la lista de la compra (mínimo 5 elementos)
//- Modifica la lista de la compra y añádele "Aceite de Girasol"
//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
arraySuper = ['Harina','Azucar','Te','Cafe','Galletas']
arraySuper.push('Aceite de Girasol')
arraySuper.pop('Aceite de Girasol')

//- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
arrayPelisFavoritas = [
    {  titulo: 'Iron Man' , 
       director: 'Jon Favreau',
       fecha: 2008  },
    {  titulo: 'The Avengers' , 
       director: ' Joss Whedon',
       fecha: 2012  },
    {  titulo: 'Avengers: Endgame' , 
       director: 'Joe Russo',
       fecha: 2019  }
]

//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

const arrayPelis = arrayPelisFavoritas.filter(obj => obj.fecha > 2010)

//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

const newArray = arrayPelisFavoritas.map((director)=>` ${'Russo Brothers'}`)

//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

const newArray2 = arrayPelisFavoritas.map((titulo)=>` ${'Saga Avengers'}`)

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

const array3 = newArray.concat(newArray2)

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const array4 = [...newArray, ...newArray2]