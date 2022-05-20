'use strict'

/*
calculadora

-pida dos numeros por pantalla
--si metemos uno mal que nos lo vuelva a pedir
- en el cuerpo de la pagina, en una alerta y por consola el resultado de sumar , restar, multiplicar, dividir,
esas dos cifras.
*/

var numero1 =parseInt(prompt("Introduce el primer numero:  ",1));
var numero2 =parseInt(prompt("Introduce el segundo numero: ",1));

while(numero1 <=0 || numero2 <=0 || isNaN(numero1)|| isNaN(numero2)){
     numero1 =parseInt(prompt("Introduce el primer numero:  ",1));
     numero2 =parseInt(prompt("Introduce el segundo numero: ",1));
}

var resultado = "La suma es: "+(numero1+numero2)+" <br/>"+
                "La resta es: "+(numero1-numero2)+" <br/>"+
                "La Multiplicación es: "+(numero1*numero2)+ " <br/>"+
                "La división es: "+(numero1/numero2)+ " <br/>";

var resultadoCRM = "La suma es: "+(numero1+numero2)+" \n"+
                "La resta es: "+(numero1-numero2)+" \n"+
                "La Multiplicación es: "+(numero1*numero2)+ " \n"+
                "La división es: "+(numero1/numero2)+ " \n";

document.write(resultado);
alert(resultadoCRM);

console.log(resultadoCRM);