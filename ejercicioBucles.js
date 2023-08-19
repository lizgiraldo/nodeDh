
//Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.
const valorSiguiente = (numero) => {

    for(let i = 1; i<=10; i++ ){
        console.log(`${numero++}`)
    }
}
valorSiguiente(3)

//Imprimir los números entre el 5 y el 20, saltando de tres en tres.
console.log('--------------------')
const valorDeTres = () => {

    for(let i = 5; i <= 20; i){
       
            console.log(i)
            i = i+3
        
    }
}
valorDeTres()

console.log('--------------------')

const acumulaNumeros = () => {
    let acumulador = 0
    for(let i= 0 ; i<=100 ; i++){
        acumulador += i;
    }
    return acumulador
}

let resultado = acumulaNumeros();
console.log(resultado)


console.log('--------------------')

const acumulaFactorial = (numero) => {
    let acumulador = 1
    for(let i= numero ; i>0 ; i--){
        acumulador *= i;
    }
    return acumulador
}

let resultado2 = acumulaFactorial(4);
console.log(resultado2)