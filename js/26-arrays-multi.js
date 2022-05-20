'use strict'

var categorias=["Accion","terror","comedia"];
var peliculas = ["La Verdad Duele","La vida es bella","Gran torino"];

//pelicula.sort();
pelicula.reverse();

var cine =[categorias,peliculas];

//console.log(cine[0][1]);
//console.log(cine[1][2]);

var elemento = prompt("Introduce el nombre de una pelicula: ");

/*do{
     elemento = prompt("Introduce el nombre de una pelicula: ");
     peliculas.push(elemento);
}while(elemento != "ACABAR")*/

//peliculas.pop();


var indice = peliculas.indexOf("gran torino");

if(indice > -1){
   peliculas.splice(indice,1);

}

var peliculas_string = peliculas.join();
var cadena="texto1, texto2, texto3 ";

var cadena_array=cadena.split(", ");

console.log(cadena_array);
//console.log(peliculas_string);
//console.log(peliculas);