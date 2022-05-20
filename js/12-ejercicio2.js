'use strict'

//utilizando un bucle, mostrar la suma y la media de los numeros introducidos
//hasta introducir un numero negativo y ahí mostrar el resultado 

var suma=0;
var contador=0;

do{
   var numero= parseInt(prompt("Introducelos numeros hasta meter uno negativo: ",0));
   if(isNaN(numero)){
   	numero=0;
   }else if(numero>=0){
   	suma= suma+numero;

   	contador++;
   }
}while(numero>=0)

alert("La suma de los numero introducidos es: "+suma);
alert("LA media de los numeros introducidos es: "+(suma/contador));