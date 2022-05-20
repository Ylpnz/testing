'use strict'

// Mostrar todo los numeros impares que hay entre dos numeros introducidos por el usuario

var impar1= parseInt(prompt("Introduce el primer numero:",0));
var impar2= parseInt(prompt("Introduce el segundo numero: ",0));

while(impar1<impar2){
  impar1++;

  if(impar1%2 !=0){
    console.log(" El numero"+impar1+ "es impar");
  }
}
