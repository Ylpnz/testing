'use strict'

// json- JavaScript Object notation

var pelicula = {
	titulo: "Batman vs SuperMan",
	year: 2017,
	pais:"Estados unidos"
};

var peliculas =[
    {titulo: "la verdad duele", year: 2016, país:"francia" },
    pelicula
];


//pelicula.titulo="Wonder Woman"// modificar

//console.log(peliculas);

var caja_peliculas = document.querySelector("#peliculas");
var index;
for(index in peliculas){
  var p = document.createElement("p");
  p.append(peliculas[index].titulo + " - "+ peliculas[index].year);
  caja_peliculas.append(p);
}