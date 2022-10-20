//Modulos: realizar funciones para volver a utilizar en diferentes archivos sin tener que repetir el codigo

export function suma(a,b){
    return a+b
}
export function multiplicacion( a,b) {
    return a*b
}
export function eleva(a,b){
    return a**b
}
export function factorial(a){
    //factorial de 5 : 5*4*3*2*1
    let factorial = 1;
    for (let i = 2; i <= a; i++){
    factorial*=i;
    }
    return factorial;

}/* 
const fact = factorial(5)
console.log(fact) */
export const nombre = 'matematicas'

