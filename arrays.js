//ANCHOR ---> Array - Arreglo - Colección

let numerosDeLaSuerte = [1,15,22,65,1850]
//Agregar manualmente
numerosDeLaSuerte[5]=47

//Agregar elementos por push -->metodo=funcion
numerosDeLaSuerte.push(47)

//Para mostrarlos individuales
console.log(numerosDeLaSuerte[5])

//Para mostrarlos
console.log(numerosDeLaSuerte)

//Se recomienda que los arreglos sean de el mismo tipo
let palabrasFavoritas = ['mama', 'papa', 'casa', 'avion']
palabrasFavoritas.push('viaje')



//como se recorre un array
const mostrarElementos = () => {

    for(let i=0; i<palabrasFavoritas.length;i++){
        console.log(palabrasFavoritas[i])
    }

}

mostrarElementos() 

let frase = 'Mañana sera un gran dia' //----> Coleccion de caracteres

console.log(frase[0])

