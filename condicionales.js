//ANCHOR --> ESTRUCTURAS DE CONTROL

//IF
const controlarAcceso = (rolUsuario) => {
 
    
    //Cualquiera de las opciones es correcta la 1 y la 2
//let accesoFinal = ""

    // if(rolUsuario === 'User'){
    //     accesoFinal = 'Tienes Acceso'
    // } else if (rolUsuario === 'Admin'){
    //     accesoFinal = 'Tiene acceso a algunas cosas'
    // } else {accesoFinal = 'No tienes acceso'}

    // return accesoFinal

    if(rolUsuario === 'User'){
        return 'Tienes Acceso'
    } else if (rolUsuario === 'Admin'){
        return 'Tiene acceso a algunas cosas'
    } else {return 'No tienes acceso'}

    return accesoFinal
}

let resultado = controlarAcceso("Admin")
console.log(resultado)

//TERNARIO

const llevoParaguas = (clima)=>{

let condicionFinal = "";
//Condicion ? verdadero : falso
 condicionFinal = clima === 'lluvioso' ? 'Si, llevalo' :  'No, no hace falta'
 return condicionFinal
}
let resultado2 = llevoParaguas('soleado')
console.log(resultado2)


//SWITCH

// vw - toyota - citroen - audi - bmw - volvo - renault

const marcaAuto = (marcaVehiculo) => {

    
    switch (marcaVehiculo){
    case 'vm' : 
        console.log('Impuesto de 200')
        break;
    case 'toyota':
        console.log('Impuesto de 300')
        break;
    case 'citroen' : 
        console.log('Impuesto de 400')
        break;
    case 'audi' : 
        console.log('Impuesto de 500')
        break;
    case 'bmw' : 
        console.log('Impuesto de 600')
        break;
    case 'volvo' : 
        console.log('Impuesto de 700')
        break;
    case 'renault' : 
        console.log('Impuesto de 800')
        break;
    default : console.log('Vehiculo no encontrado')
    }  
}

let marca = marcaAuto ('audi')
console.log(marca)