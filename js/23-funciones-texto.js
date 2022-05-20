'use strict'

// transformar textos de cadenas
var numero=444;
var texto1=" Bienvenido al curso de Java Script";
var texto2="Es muy buen curso";

var dato= numero.toString();
    dato=texto1.toLowerCase(); // minusculas
    dato=texto2.toUppCase(); // mayusculas

console.log(typeof dato);

// calcular la longitud

var nombre="";

console.log(nombre.length());


// concatenar // unir textos

//var textoTotal= texto1+" "+texto2;
var textoTotal =texto1.concat(" "+texto2);

console.log(textoTotal);

//buscar

var busqueda= texto1.indexOf("curso");

console.log(busqueda);