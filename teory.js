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

//Bucle FOR
for(let i=0; i<5; i++){
    console.log("iteracion "+ i + " contenido arreglo: " + arreglo[i]);
}

//while
let count = 0;
while (count < 5){
    console.log("Cuenta: "+count);
    count++;
}

let mascota = false;
while(mascota == false){
    console.log("SI ES "+ mascota);
        for(let i = 0; i < arreglo.length; i++){
            console.log("iteracion: "+i+ " contenido arreglo: "+ arreglo[i]);
        }
        mascota == arreglo[1];
    }

for(let i = 0; i < 10; i ++){
    if (i === 5){
        break;
    }
    console.log(i);
}

let ejemplo = "perro";
for (let i = 0; i < arreglo.length; i++){
    console.log("funcion con condicional: "+ arreglo[i]);
    if(arreglo[i]== ejemplo){
        var encontrado = true;
        console.log("lo encontre");
        break;
    }
    console.log("Ciclo terminado");
}
console.log("For terminado");

//Do while
let counter = 0;
do{
    console.log("Cuenta: "+ counter);
    counter++;
}while(counter == 5);

//Funciones
function nombreDeLaFuncion(){

}

function searchPerson(name, id){

}

const nombreFuncion = function searchPerson(name, id){

}

const resultado = function sumar(a, b ){
    return a+b;
}

console.log(resultado);

function sumar(a=1, b=2){
    return a+b;
}

const funcionFlexha = (a,b) =>{
    return a+b;
}


