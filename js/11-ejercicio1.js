'use strict'

// un programa que pida dos numero y que nos diga cual es el mayor y cual es el menor y si son iguales
// PLUS// SI LOA NUMEROS NO SON NUMERO O SON MENOR O IGUAL A CERO , NOS LO VUELVA A PEDIR.

/*var numero1 = 78;
var numero2 = 20;

if(numero1 > numero2){
	console.log("El numero 1 es mayor que el numero 2" );
}else{
	console.log("El numero 1 es menor que el numero 2");
}
*/

var numero1 = parseInt(prompt("Introduce el primer numero; ",0));
var numero2 = parseInt(prompt("Introduce el segundo numero; ",0));

while(isNaN(numero1) || isNaN(numero2) || numero1<=0 || numero2<=0){
	numero1 = parseInt(prompt("Introduce el primer numero; ",0));
    numero2 = parseInt(prompt("Introduce el segundo numero; ",0));
}

if(numero1> numero2){
   console.log("El numero 1 es mayor que el numero 2");
}else if(numero1 < numero2){
	console.log("El numero 2 es mayor que el numero 1");
}else if( numero1 == numero2){
	console.log(" los numeros son iguales");
}