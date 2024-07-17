//Types array apis fetch & servicios tipo rest
//fetch(url, options){}
fetch('https://jsonplaceholder.typicode.com/posts')
// response -> informacion de la api como texto plano
.then(response=>{
    //procesar las respuestas
    return response.json();
})
//data manipular el objeto
.then(data =>{
    console.log(data);
    let outputElement= document.getElementById('output');
    outputElement.innerHTML = '';

    data.forEach(post => {
        console.log(post);
        let generalSection = document.createElement('div');
        generalSection.innerHTML = `<h2>${post.title}</h2> <p>${post.body}</p><hr>`;
        outputElement.appendChild(generalSection);
    });
})
.catch(error=>{
    //manejar errores
    console.error("error trayendo la data: ", error);
    alert();
    let outputElement = document.getElementById('output');
    outputElement.innerHTML = `<h2>Error al obtener los datos: ${error}</h2>`;
});



var objeto = {id: 30, username: '30', fistname: ''};
////// POST
fetch('http://api.ejemplo.com/enviar',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(objeto.username,)
})
.then(response => {
    //response.ok reponde en true & false , default (true);
    if(response.ok);
    response.json();
})
.then(data => console.log(data))
.catch(error => console.error('Error: ',error));


