'use strict'

//condicional if
// ejemplo 1
/*var edad1 = 30;
var edad2 = 75;

//si pasa esto
if(edad1 > edad2){
	//ejecuta esto 
	console.log("Edad uno es mayor que edad dos");
} else {
	console.log("la edad 1 es inferior");
}
*/

/*
   operadores relacionales

   mayor: >
   Menor: <
   Mayor o igual: >=
   Menor o igual: <=
   Igual: ==
   Distinto: !=
*/

// ejemplo 2

var edad = 27;
var nombre= "Susana Guzman";

if(edad >= 18){
	//es mayor de edad
	console.log(nombre+" tiene "+edad+" años, es mayor de edad");

	if(edad <= 33){
		console.log('todavía eres milenial');
	} else if(edad >= 70){
		console.log('Eres anciano');
	} else{
		console.log("ya no eres milenial");
	}

}else{
	// es menor de edad
	console.log(nombre+" tiene "+edad+"años, es menor de edad");
}

/*
//operadores logicos

AND (Y):&&
OR(O):||
Negación: !

*/


var year = 2021;

//Negación
if(year != 2016){
	console.log("El año no es 2016, realmente es: " +year);
}

// AND

if(year >= 2000 && year <=2020){
   console.log("Estamos en la era actual");
}else{
   console.log("Estamos en la era postmoderna");
}


//OR

if (year == 2008 || (year >= 2018 && year == 2028 )) {
	console.log("El año es terminado en 8");
}else{
	console.log("AÑO NO REGISTRADO");
}
