'use strict'

window.addEventListener('load', function(){

//timers
	    function intervalo(){
	      var tiempo = setInterval(function(){
		   console.log("Set interval ejecutado");

		   var encabezado = document.querySelector("h1");
		   if(encabezado.style.fontSize == "50px"){
		   	encabezado.style.fontSize ="30px";
		   }else{
		   	encabezado.style.fontSize ="50px";
		   }

		},500);
	      return tiempo;
	    }
	
	var tiempo = intervalo();

	var Stop = document.querySelector("#Stop");

	Stop.addEventListener("click",function(){
		alert("Has parado el intervalo del bucle");
		clearInterval(tiempo);
	});

	var Start = document.querySelector("#Start");

	Start.addEventListener("click",function(){
        alert("Has iniciado el inertavlo del bucle");
        intervalo();
	});

});