'use strict'

/*
un programa que nos diga si un numero es par o impar
1. ventana prompt
2. si no es valido que nos pida de nuevo el numero
*/

var numero=parseInt(prompt("Introduce un numero: ",0));

while(isNaN(numero)|| numero<=0){
  numero=parseInt(prompt("Introduce un numero: ",0));
}

if(numero%2 ==0){
  console.log("Este numero es par ");
}else{
  console.log("Este numero es impar");
}