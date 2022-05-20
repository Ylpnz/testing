'use strict'

//localstorage 

// comprobar disponibilidad de localstorage// es como un almacenamiento que tiene cada pagina, no se repite.

if(typeof(Storage) !== 'undefined'){
  console.log("local Storage Disponible");
}else
{
	console.log( "incompatible con localStorage");
}

//guardar los datos:

localStorage.setItem("titulo","curos de symfony de victor Robles");

// recuperar elemento

document.querySelector("#peliculas").innerHTML=localStorage.getItem("Titulo");

//guardar objeto

var usuario={
	nombre: "victor Robles",
	email:"victor@victor.com",
	web:"victorroblesweb.es"
};

localStorage.setItem("usuario",JSON.stringify(usuario));

//recuperar objeto

var userjs= JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);
document.querySelector("#datos").append(userjs.web+" - "+userjs.nombre);

//localStorage.removeItem("usuario");

//localStorage.clear();