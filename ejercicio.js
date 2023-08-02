let temperatura = 36;
let lloviendo = false; //Esta variable debe ser ingresada por el usuario
let pisoAscensor = 3; //Esta variable debe ser ingresada por el usuario
let horaActual = 12;
const horaApertura = 9;
const horaCierre = 18;
let cantQueso= 100;//Esta variable debe ser ingresada por el usuario
let deuda = 200;
let deudaAcumulada = deuda + (cantQueso * 2.50);

console.log(deudaAcumulada)
console.log('--------')

//Promedio de Notas si es mayor de 7 el alumno aprobará
//Estas variables debe ser ingresada por el usuario
let n1 = 3 
let n2 = 2
let n3 = 1
let promedio = (n1+n2+n3)/3

console.log(promedio)

console.log('--------')
let estadoAprobacion = promedio>7;
console.log('El estudiantes está:' + estadoAprobacion)


console.log('--------')
//Si es mayor de 9 años puede ver la pelicula

const anioActual = 2023;
let anioNacimiento = 2021; //Esta variable debe ser ingresada por el usuario

let edad = anioActual - anioNacimiento;

let cumple = edad >= 9
console.log('Entrada de Cine: ' + cumple)






