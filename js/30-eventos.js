'use strict'

//Eventos
// es cuandos e ejecuta algo en la pagina
// eventos de raton

	window.addEventListener('load',()=>{
	//var boton= document.querySelector("#boton");

	function cambiarColor(){
		console.log("Me has dado click");

		var bg = boton.style.background;
		if(bg == "green"){
			boton.style.background = "red";
		} else{
			boton.style.background= "green";
		}
		boton.style.padding= "10px";
		boton.style.border= "1px solid #ccc";
		return true;
	}

	var boton = document.querySelector("#boton");

	//click

	boton.addEventListener('click',function(){
		cambiarColor();
		console.log(this);
		this.style.border="10px solid black";
	});

	//Mouse Over
	boton.addEventListener('mouseover',function(){
	   boton.style.background = "#ccc";
	});

	// Mouse Out
	boton.addEventListener('mouseout',function(){
	   boton.style.background = "black";
	});

	//focus

	var input = document.querySelector("#campo_nombre");

	input.addEventListener('focus',function(){
	   console.log("Estas dentro del input");
	});


	//blur
	input.addEventListener('blur',function(){
	   console.log("Estas fuera del input");
	});

	//keydown

	input.addEventListener('keydown',function(event){
	   console.log("pulsando esta tecla", string.fromCharCode(event.keycode));
	});

	//Keypress

	input.addEventListener('keypress',function(event){
	   console.log("tecla presionada", string.fromCharCode(event.keycode));
	});

	//keyup
	input.addEventListener('keyup',function(event){
	   console.log("tecla levantada", string.fromCharCode(event.keycode));
	});

});

