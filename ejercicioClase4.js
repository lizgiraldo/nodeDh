//Ejercicio No. 1
function pulgadas(x){   
    return x*2.54
}

let resultado = pulgadas(5)
console.log(`las pulgadas convertidas en centimetros son ${resultado}`)

console.log('---------------')

//Ejercicio No. 2
function convertidor(dato){
    let texto = `http://www.${dato}.com`
    return texto
}

let nombre = convertidor('lizeth')
console.log(nombre)

console.log('---------------')

//Ejercicio No. 3
function admiracion(a){
    let signo = `¡${a}!`
    return signo
}

let tres = admiracion('Hola soy texto')
console.log(tres)


console.log('---------------')
//Ejercicio No.4
function añosPerrunos (edad){
    let multi = edad*7
    return multi
}

let total = añosPerrunos(5)
console.log(`Los años perrunos de tu mascota son ${total}`)

console.log('---------------')
//Ejercicio No.5
function sueldo(salarioBase){
    let div = salarioBase/40
    return div
}

let sueldoHora = sueldo(480000)
console.log(`El valor por hora de trabajo es de $ ${sueldoHora} pesos`)

console.log('---------------')
//Ejercicio No.6

function imc(kg, mt2){
    let resultado = kg/(mt2*mt2)
    return resultado
}

let indice = imc(54, 1.54)
console.log(`Tu indice de masa corporal es ${indice}`)


console.log('---------------')
//Ejercicio No.7
function oracion (texto){
    let change = texto
    return change
}

let cambio = oracion('hola soy un texto')
console.log(cambio.toUpperCase())


console.log('---------------')
//Ejercicio No.8
function parametro(tipo){
let queTipo = typeof tipo
return queTipo
}

let para = parametro('Hola')
console.log(`El tipo de archivo es ${para}`)





