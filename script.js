// Variables
var x = 0;
let nombreVariable2 = 0;
const nombreConstante = 2;

// Tipos de datos
let number = 5;
let texto = "123";
let textoDos = '123';
let boolean = true;
let valorNulo = null;

//Mostrar en consola y concatenacion 
console.log("Number: "+number);
console.log(`Mi variable numerica es ${number} y mi boleean es ${boolean}`);

//Symbol
let symbol1 = Symbol("descripotion");

// Objects
let person = {
    name: "",
    age: 3
}

//BigInt
let numeroGrande = BigInt(123456789012345689); //no admite numeros negativos

//array, indice que empieza por sero
let arreglo = [1, 2, 3, 4];
arreglo.push(5); //Agregar un elemento, coloca el elemento de segunda 
arreglo.unshift(0); //Agrega en la posicion primera, mueve el array hacia la derecha
arreglo.pop();//Quita el ultimo elemento del arreglo
arreglo.shift();//Quita el primer elemento del arreglo
arreglo.forEach();//Ejecutar una funcion sobre cada uno de los elementos que tenemos -acceder y modificar
arreglo.map();//Crea un nuevo arreglo con los resultados de lo que se hizo en un callback -acceder y nos regresa un nuevo arreglo con las modificaciones

//Set una coleccion de valores unicos que se accede por el valor, basado en insercion

//CONDICIONALES
//if > condicion > que pasa
let nombreVariable = "0";

//Dos iguales el tipo de dato no es relevant
if(nombreVariable === 0){
    console.log("True");
}else{
    console.log("False");
}