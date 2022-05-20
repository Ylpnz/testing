'use strict'

//BOM--browser objet model

function getBom(){
console.log(window.innerWidth);// anchura
console.log(window.innerHeight);// altura
console.log(window.location);
//console.log(screen.Width);// anchura
//console.log(screen.Height);// altura
}

function redirect(url){
	window.location.href = url;
}

function abrirVentana(url){
	window.open(url, "", "width=400,height=300");
}
getBom();