'use strict'

//while

var year  = 2018;

while (year <= 2051){
	console.log("Estamos en el año "+year);

	if(year == 2000){
		break;
	}

	year--;
}

// Do While

var years = 30;

do{
    alert("Solo cuando sea diferente a 20");
    years--;
}while (years > 25)