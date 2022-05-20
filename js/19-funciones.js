'use strict'

//funciones
//una funcion es una agrupacion reutilizable de un conjunto de intrucciones

//defino la funcion

function porConsola(numero1,numero2){
    console.log("suma: "+(numero1+numero2));
	console.log("resta: "+(numero1-numero2));
	console.log("multiplicacion: "+(numero1*numero2));
	console.log("division: "+(numero1/numero2));
	console.log("*****************************************************");

}

function porPantalla(numero1,numero2){
    document.write("suma: "+(numero1+numero2)+"</br>");
	document.write("resta: "+(numero1-numero2)+"</br>");
	document.write("multiplicacion: "+(numero1*numero2)+"</br>");
	document.write("division: "+(numero1/numero2)+"</br>");
	document.write("*****************************************************");

}

function calculadora(numero1,numero2, mostrar =false){

	//conjunto de instrucciones a ejecutar
	if(mostrar == false){
	   porConsola(numero1,numero2);
}else{
	   porPantalla(numero1,numero2);
}
     return true;

}

//invocar o llamar a la funcion

calculadora(2,3);
calculadora(4,5, true);
calculadora(8,3);

/*for(var i=1; i<=10; i++){
	console.log(i);
	calculadora(i,8);
}*/

