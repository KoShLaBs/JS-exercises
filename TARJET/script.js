fetch("https://jsonplaceholder.typicode.com/users")
.then(response =>{
    return response.json();
})
.then(user =>{
    console.log(user);
    bringData(user);

}).catch(error=>{
    //manejar errores
    console.error("error trayendo la data: ", error);
    alert();
    let outputElement = document.getElementById('tarjets');
    outputElement.innerHTML = `<h2>Error al obtener los datos: ${error}</h2>`;
});

function bringData(usera){
    let outputElement= document.getElementById('tarjets');
    outputElement.innerHTML = '';
    usera.forEach(user => {
        const card = document.createElement("div");
        const img = document.createElement('img');
        img.src = `https://i.pravatar.cc/100?u=${user.id}`;
        img.alt = 'Avatar Profile';
        const name = document.createElement("h2");
        name.textContent = user.name;
        const username = document.createElement("p");
        username.textContent = `Username: ${user.username}`;
        const email = document.createElement("p");
        email.textContent = `Email: ${user.email}`;
        const phone = document.createElement("p");
        phone.textContent = `Phone: ${user.phone}`;

        console.log(name);
        console.log(username);
        console.log(email); 
        console.log(phone);

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(username);
        card.appendChild(email);
        card.appendChild(phone);

        outputElement.appendChild(card);
    });
}
