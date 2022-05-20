'use strict'

/*
1. pida 6 numeros por pantalla y los meta en un array
2. mostrar el array entero ( todos sus elementos) en el cuerpo de la pagina y en la consola
3. ordenarlo y mostrarlo
4. invertir su orden y mostrarlo
5. mostrar cuantos elementos tiene el array
6. busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
*/
function mostrarArray(elementos, textoCustom = ""){
    document.write("<h1>Estos son los numeros del array:"+textoCustom+" </h1></br>");
    document.write("<ul>");
    elementos.forEach((elemento,index) =>{
    document.write("<li>"+elemento+"</li>");
});
    document.write("</ul>");
}

var numeros=[];

for(var i=0; i<=5; i++){
   numeros.push(parseInt(prompt("Introduce los numeros al array: ",0)));
}


mostrarArray(numeros);

console.log(numeros);

numeros.sort();
console.log(numeros);
mostrarArray(numeros,'Ordenados');

numeros.reverse();
console.log(numeros);
mostrarArray(numeros,'al reves');

document.write("<h1> el array tiene "+numeros.length+" elementos</h1>");

var busqueda= parseInt(prompt("Busca un numero",0));

var posicion= numeros.findIndex(numero => numero == busqueda);


if(posicion && posicion != -1){
    document.write("<h1>ENCONTRADO</h1>");
    document.write("<h1>posición de la busqueda "+posicion+"</h1>");

}else{
    document.write("<h1>NO ENCONTRADO</h1>");
}

