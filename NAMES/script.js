let name;
let age;
let list = [];

function getValuesFromHTML(){
    name = (document.getElementById('name').value);
    age = parseInt((document.getElementById('age').value));    
}

function addToList(){
    getValuesFromHTML();    
    console.log(name, age);
    list.push();
}

function loadListToHTML(){
    let listHistory = document.getElementById('list');
    console.log(listHistory);
}