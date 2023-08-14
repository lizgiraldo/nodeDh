//ANCHOR ---> Estructuras de repeticion

//for --> INICIALIZACION / CONDICION / MODIFICADOR

const mostrarHastaElDiez = ()=>{

    for(let i = 1 ; i <=5 ; i++){
     console.log('El numero que tenemos es ' + i)
    }
}

mostrarHastaElDiez()

//while

const mostrarHastaNueve = () => {
let i = 11;
    while(i <= 10){
        console.lo (i);
        i++;
    }
}

mostrarHastaNueve()


//DO WHILE

const cicloDoWhile = ()=>{
let i = 10;
do{
    console.log(i);
    i++;
} while (i<=10)

console.log("termine")

}

cicloDoWhile()

//TABLA DE MULTIPLICACION
console.log('--------------------------')
const tablaMulti = (numero) => {

    for(let i=1 ; i <=10; i++){
        //console.log(numero + 'x' + i +' = ' + i*numero)
        console.log(`${numero} x ${i} = ${i*numero}`)
    }
}
//para saber si es par numero%2 === 0
//para saber si es impar numero%2 !== 0
tablaMulti(1)

const acumulaNumeros = () => {
    let acumulador = 0
    for(let i= 1 ; i<=5 ; i++){
        acumulador += i;
    }
    return acumulador
}

let resultado = acumulaNumeros();
console.log(resultado)


const cantidadImpares = () => {
    let cantidad = 0;
    for(let i = 0; i <= 10; i++){
        if(i % 2 !== 0){
            cantidad++
        }
    }
    return cantidad
}

let resultado2 = cantidadImpares();
console.log(resultado2)
