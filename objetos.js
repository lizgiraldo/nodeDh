//Objeto literales

//propiedades
//Los objetos pueden tener metodos 
//PARES --> clave / valor ---> para serparar la clave del valor es con (:)
//con el (.) puedo acceder a la informacion del objeto
let obj = {
    precioProducto: 2500,
    nombreProducto:'Pizza',
    categoriaProducto:'Comida',
    direccion:{
        calle: '15',
        numero:'5-35'
    }
}

//para modificar una propiedad dentro de un objeto
obj.precioProducto = 2300

//para añadir propiedades dentro del objeto
obj.lugar = 'valle'

//borrar una propiedad de un objeto ---> pero no se debe usar OJO
//delete celular.lugar

console.log(obj.categoriaProducto)

//arreglos con objetos
//ejemplo de productos ---> nombre, precio, stock

let productos = [{
    nombre: 'tele',
    precio: 22,
    stock: 12
},
{
    nombre: 'phone',
    precio: 50,
    stock: 15
},
{
    nombre: 'cama',
    precio: 10,
    stock: 10
}]

//como acceder a el array
productos[1].nombre 

//encontrar un elemento en base al nombre

const encontrarElemento =(nombre) =>{

    for(let i=0; i<productos.length;i++){

        if(productos[i].nombre === nombre){
            return productos[i].precio
        }
        
    }

}

encontrarElemento('phone')

productos.push({
    nombre: 'almohada',
    precio: 20,
    stock: 130
})

console.log(productos)