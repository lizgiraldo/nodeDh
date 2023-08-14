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


//FUNCION EXPRESADA o ANONIMAS

    //FUNCION EXPRESADA ---> comun = no tienen normbre, por eso se le asigna una variable o en buena practica ser un const (una constante)

    const multiplicacion = function(){
        let n1 = 2
        let n2 = 4
        return n1*n2
    }

    let resulMulti = multiplicacion();
    console.log(resulMulti)

    //FUNCION EXPRESADA ---> flecha (arrow fuction)
    // si recibe un unico parametro pouedo quitar los parentesis
    // si la funcion tiene una unica linea de codigo puedo omitir el return y las llaves
const sumaDos = n3 => n3+20;

const dividir = (n1,n2) => n1/n2;

const multiplicar = (n4,n5) => {
    return n4*n5;
}

//SCOPE --> Ambiente donde vive una variable, se delimita por las llaves que estan en su entorno

{
    let primerScope1 = 'Hola soy un scope';
    {
        console.log(primerScope1)
        {

        }
    }
} //Pero la variable primerScope1 no la puedo usar ya que esta dentro de un scope local


