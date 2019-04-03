// Numero Primo con Switch - Ejemplo 1
var mi_numero_primo = Number(prompt("Dame un numero primo"))

switch (true) {
    case (mi_numero_primo = mi_numero_primo / mi_numero_primo):
    console.log("El numero es primo")
    case (mi_numero_primo = 1):
    break;
    default:
    console.log("No es un numero valido")
}





// Numero Par Multiplicado por 2 y Numero Impar Multiplicado por 3 - Ejemplo 1
console.log("Numero Par X 2, Numero Impar X 3")
var i = Number(prompt("Dame un numero"))
if(i % 2 == 0) {
    console.log(i*2)
}
else {
    console.log(i*3)
}
// Numero Par Multiplicado por 2 y Numero Impar Multiplicado por 3 - Ejemplo 1
var Impar = 0 

// Arrays - Ejemplo 1
var a = 2
var b = 3
var c = 4

var lista1 = [a,b,c]
var lista2 = [1,2,3,4,5,6,7,8,9]
var lista3 = ["Milton Carlos", "Luis", "Cristina", "Domingo"]

console.log(a)
console.log(lista1)

lista1[3]
// Arrays - Ejemplo 2
var jugador1 = "Angel"
var jugador2 = "Milton"
var jugador3 = "Domingo"
var jugador4 = "Cristina"
var jugador5 = "Luis"
var jugador6 = "Erick"
// Creacion de lista
// var lista = [jugador1,jugador2,jugador3,jugador4,jugador5,jugador6]
var numeros = [1,2,3,4,5,6,7,8,9]
/*
    .sort()
    Nos permitira ordenar el arreglo, si es de numeros sera de forma ascendente y
    si es de cadenas por orde de precedencia
*/
var lista = new Array(jugador1,jugador2,jugador3,jugador4,jugador5,jugador6)
console.log(lista.sort())
/*
    .reverse ()
    Nos permitira colocar los valores en reversa
*/
console.log(lista.reverse())
/*
    .pop()
    Eliminara el ultimo elemento y lo retornara
*/
ultimoElemento = lista.pop();
console.log(lista);
console.log(ultimoElemento);
/* 
    .splice(index)
    Tomara los elementos, los eliminara y los retornara y el arreglo se queda
    con los elementos que no se eliminaron
*/
console.log(lista.splice(1));
console.log(lista);
/* 
    .push()
    Agregara un elemento en la ultima posicion de la lista, si se le pasa una lista
    agregara esta como elemento
    Retornara la nueva longitud de la lista
*/
lista.push(ultimoElemento)
console.log(lista);
/* 
    .concat()
    Concatenara dos listas
*/
a = [1,2,3]
b = [7,8,9]
c = a.concat(b) // [1, 2, 3, 7, 8, 9]
console.log(c)
/* 
    .forEach(function)
    Permitira ejecutar un for en una sola linea, pero no retornara el valor.
*/
lista.forEach(x => { console.log ( (x=1)*7) } ) 
/* 
    .map(function)
    Permitira "mappear" los elementos de una lista.
*/
console.log(lista.map( x => { return x * 3}))

function parImpar (x) {
    if (x%2 == 0) {
        return x*2
    }
    else {
        return x*3
    }
}
console.log(numeros.map( x => parImpar(x)))
/* 
    Crear listas de numeros sin colocar todos los numeros
*/
var numerosAutomaticos = [...Array(115).keys()];
console.log(numerosAutomaticos);















