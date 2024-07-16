//Funcion que suma, que resta, que muestra resultados

//DOM object document model = revolver lo que tenemos en HTML para poderlo usar en JS, juntar ambos espacios

//Vaya a mi HTML y traigame lo que quiero basado en---
let num1; 
let num2; 
let operation; 
let result;
let historial = [];

function getValuesFromHTML(){
    num1 = parseFloat(document.getElementById('num1').value);
    num2 = parseFloat(document.getElementById('num2').value);
    operation = document.getElementById('operation').value;
}

function selectOperaction(){
    getValuesFromHTML();
    switch (operation) {
        case "sum":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if(num2 === 0){
                alert("Estas dividiendo un numero por cero");
            }
            result = num1 / num2;
            break;                                    
        default:
            alert("operacion invalida")
            break;
    }
    setResultToHTML();
    addToHistory(num1, num2, operation, result);
}

function setResultToHTML(){
    //inner text cambiamos el dato de un elemento de nuestro HTML
    document.getElementById('result').innerText = result;
}

function addToHistory(num1, num2, operation, result){
    let operationSymbol;
    switch (operation) {
        case "sum":
            operationSymbol = "+";
            break;
        case "subtract":
            operationSymbol = "-";
            break;
        case "multiply":
            operationSymbol = "*";
            break;
        case "divide":
            operationSymbol = "/";
            break;
        default:
            break;
    }
    let historyItem = `${num1} ${operationSymbol} ${num2} = ${result}`;
    historial.push(historyItem);
    updateHistoryHTML();
}

function updateHistoryHTML(){
    let historyList = document.getElementById('history');
    console.log(historyList);
    historyList.innerHTML = '';
    for(let item of historial){
        console.log(item);
        let li = document.createElement('li');
        console.log(li);
        li.innerHTML= item;
        historyList.appendChild(li);
    }
}