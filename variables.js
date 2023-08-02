//VARIABLES
// let - const - var (ya no se usa esta ultima)

let nombreUsuario = 'lizeth';
const apellido = 'giraldo';

console.log(nombreUsuario);
console.log(apellido);


//Asignamos una nueva info a la variable
//para comentar Command+KC
nombreUsuario = 'Luz Mary';
console.log(nombreUsuario);

//ANCHOR ---> TIPO DE DATOS PRIMITIVOS

//string o cadena de texto
let frase = 'Hoy hace calor, !';

//tipos de datos numbers -- numeros
let edad = 123;
let valor = 15.68;

// Boolean --->True o False
let esMayor = true;
let esMenor = false;

//undefined
//->Guardar en un avariable pero no se su valor todavia, pero no es necesario ya que por defecto al dejar la variable vacia queda asi
let nombreDeUsuario = undefined;

//null
//-> Se usan para respuestas de un servidor (base de datos), pero esta no la creamos nosotros
let peticionDatos = null;

//NaN
//-> not a number
//ANCHOR --->OPERADORES 
//ANCHOR --->operadores Matematicos
let y = 6
let z = 4

console.log(y + z)
console.log(y - z)
console.log(y / z)
console.log(y * z)
//para saber si un numero es impar o no el modulo es la devulucion del restante 
console.log(y % z) 



//ANCHOR --->operadores Comparacion
//Devolvera un true o false
console.log(y == z);
console.log(y =! z);
console.log(y <= z);
console.log(y >= z);
console.log(y < z);
console.log(y > z);


//comparacion Estricta
let n1 = '12';
let n2 = 12;

console.log(n1 === n2)
console.log(n1 !== n2)

//ANCHOR --->operadores Lógicos

// AND ---> &&
//ANCHOR ---> Debe cumplir con todos en true  para que el resultado sea TRUE
let estaLogueado = true;
let esAdmin = false;

let darPermiso = estaLogueado === true &&  esAdmin === true


// OR ---> ||
//ANCHOR ---> Basta con una condicion que sea true para que el resultado sea TRUE

let estaLogueado1 = true;
let esAdmin1 = false;

let darPermisoOr = estaLogueado === true ||  esAdmin === true

// not --->!
//Cambia lo contrario a lo que tenga la variable se usa en booleanos
console.log("---------")
let xx = true
console.log(!xx)

