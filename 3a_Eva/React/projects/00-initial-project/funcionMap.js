/*const nuevoArray = arrayOriginal.map((elemento, indice, array) => {
    //Elemento es obligatorio
    //índice y array son opcionales

    //Lógica de transformación
    return elementoTransformado
});
*/
const numeros = [1, 2, 3, 4];

//Multiplicar por 2 cada uno de los números del array usando .map
const nuevoNumeros = numeros.map((numero) => {
    return numero * 2;
});
console.log(nuevoNumeros);

//Devolver un array con todos los nombres en mayúsculas:
const nombres = ["Uma", "David", "Parsa", "Pedron", "Noe", "Jia"];

const nuevoNombres = nombres.map((nombre) => {
    return nombre.toUpperCase();
});

console.log(nuevoNombres);

const productos = [
    {producto: "Laptop", precio: 250},
    {producto: "Tablet", precio: 75},
    {producto: "Mochila", precio: 50}
];

//Devolver un array nuevo con todos los precios de los objetos con un 10% de descuento:
const prodDescuento = productos.map((producto) => {
    return "Producto: " + producto.producto + " | Descuento: " + producto.precio * 0.9 + " euros";
});

console.log(prodDescuento);

//Devolver un array nuevo que cada objeto tenga esta estructura:
const agenda = [
    {
        firstName: "Maria",
        lastName: "Lopez",
        age: 17,
        active: false
    }
];


const nuevoArray = agenda.map((user, index) => {
    const {firstName, lastName, age, active} = user;
    return {id: `${index}_${firstName}_${lastName}`,
            fullName: `${firstName} ${lastName}`,
            isAdult: age > 18 ? true : false,
            status: active ? 'Active' : 'Inactive'
    }
});

console.log(nuevoArray);
