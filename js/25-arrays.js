'use strict'

//arrays- arreglos matrices


var nombre= "Victor Robles";
var nombres=["Victor robles","Laura Peña","Juan Jose","Yesica Peña","Nidia Gomez"];

var lenguajes= new Array("php","js","node");

/*console.log(nombre);
console.log(nombres[2]);
console.log(lenguajes);
*/

/*var elemento = parseInt(prompt("Que elemento del array quieres???",0));
if(elemento>=nombres.length){
      alert("Introduce el numero correcto menor que " +nombres.length);
}else{
      alert("El usuario seleccionado es:  " +nombres[elemento]);
}*/

document.write("<h1> Lenguajes de Programación del 2018 </h1>");
document.write("<ul>");

/*for (var i=0; i< lenguajes.length; i++){
	document.write("<li>"+lenguajes[i]+"</li>");
}*/


/*lenguajes.forEach((elemento,indice, arr)=>{
	console.log(arr);
	document.write("<li> "+ indice +"  -  "+ elemento+"</li>");
});*/

for(let lenguaje in lenguajes){
    document.write("<li> "+ lenguaje[lenguajes]+"</li>");
}


document.write("</ul>");

//busquedas
var precios= [10,20,30,40,50];
/*var busqueda = lenguajes.find(function(lenguaje){
	return lenguaje == "PHP";
});*/

//var busqueda = lenguaje.find(lenguaje => lenguaje == "PHP");
var busqueda= precios.some(precio => precio>=20);

console.log(busqueda);