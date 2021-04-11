
"use strict";

// const urlBase = "http://localhost:8080/"
window.onload = function() {
    if(document.getElementById("pwd").value != document.getElementById("checkPwd")) {

    }


    
}

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}


async function saveUsers() {
    var data = {};
    let route = "audits";
    data.id_login = document.getElementById("id_login").value;
    data.name = document.getElementById("name").value;
    data.user = document.getElementById("user").value;
    data.email = document.getElementById("email").value;
    data.date_birth = document.getElementById("date").value;
    data.age = getAge(data.date_birth).toString();
    data.conselho = document.getElementById("conselho").value;
    data.city = document.getElementById("city").value;
    data.password = document.getElementById("pwd").value;
    console.log(data);

    //chamada fetch para envio dos dados para o servior via POST
    fetch.postData(route, data);
}

function postData(route, data) {
    console.log(urlBase + route)
    fetch(urlBase + route, {
        headers: { 'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    }).then(function(response) {
        if (!response.ok) {
            console.log(response.status); //=> number 100–599
            console.log(response.statusText); //=> String
            console.log(response.headers); //=> Headers
            console.log(response.url); //=> String
            if (response.status === 409) {
                // alert("Duplicado!");
            }
            else {
                throw Error(response.statusText);
            }
        }
        else {
            // alert("Submetido com sucesso");
        }
    }).then(function(result) {
        console.log(result);
    }).catch(function(err) {
        // alert("Erro de submissão");
        console.error(err);
    });
}





