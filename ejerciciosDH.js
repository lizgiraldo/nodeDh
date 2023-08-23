// const loro = (texto) => {
//     for(let i = 1; i<=5; i++){
//     console.log(texto)
//     } 
// }

// loro('Hola soy un texto')

// function noParesDeContarImparesHasta(numero){
//     let x = 0;
//     for(let i = 0; i<= numero; i++){
//         if((i % 2) !== 0){
//             x = x+1
//         }
//     }
//     return x
// }

// console.log(noParesDeContarImparesHasta(4))

function tablaDeMultiplicar(numero) {
	let i = 1
 	while(i<=10){
		 console.log(numero + ' * ' + i +' = '+ numero*i)
		 i++
	 }
}

tablaDeMultiplicar(5)