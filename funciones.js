//ANCHOR ---> Funciones
//Bloque de codigo o instrucciones en donde englobo procedimientos 

//CREAR LA FUNCION

function saludar () {
    //Bloque de Código
    let nombre = 'lizeth'
    let saludo = 'Hola ' + nombre + ' como estas?'
    return saludo
}


// EJECUTAR LA FUNCION
//Se recomienda crear return a la funcion y asignarle una variable a esta para poderla usar fuera
let saludoFinal = saludar()
console.log(saludoFinal)

function sumar (n1, n2){
    return n1 + n2
}

let resultado = sumar(5,4)
console.log(resultado)

//concatenar strings
//Template literals ---> backsticks
let conC = `hola ${nombre} como estas?`