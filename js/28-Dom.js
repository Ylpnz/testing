'use strict'

// DOM document objet model

function cambiaColor(color){
	caja.style.background = color;
}

//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");

caja.innerHTML= "texto en la caja desde js";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "Hola";

var todosLosDivs = document.getElementsByTagName('div');

var seccion =  document.querySelector("#miseccion");
var hr = document.createElement("hr");

var valor;
 for( valor in todosLosDivs){
 	if(typeof todosLosDivs[valor].textContent == 'string'){
var parrafo = document.createElement("p");
 	var texto = document.createTextNode(todosLosDivs[valor].textContent);
 	parrafo.appenChild(texto);
 	document.querySelector("#miseccion").appenChild(parrafo);
 	}
 	
 }


seccion.appen(hr);
/*var contenidoEnTexto = todosLosDivs[2];
contenidoEnTexto.innerHTML = "otro texto para el segundo elemento";
contenidoEnTexto.style.background = "red";	

console.log(contenidoEnTexto);*/





//console.log(caja

var divRojos= document.getElementsByTagName('rojo');
var divsAmarillos=document.getElementsByTagName('amarillo');
divsAmarillos[0].style.background = "yellow";

var div;
for(div in divsRojos){
	if(divsRojos[div].className == "Rojo"){
		divsRojos[div].style.background = "red";
	}

}

var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector("div.rojo");
console.log(claseRojo);

var etiqueta = document.querySelector("div");
console.log(etiqueta);