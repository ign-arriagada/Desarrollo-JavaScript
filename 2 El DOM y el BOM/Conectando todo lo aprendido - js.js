function convertir(){
	var numero1 = parseInt(document.getElementById("numero1").value);
	var resultado;
	var opcion = parseInt(document.getElementById("opciones").value);

	if(validar(numero1)){
		switch(opcion){
			case 0:
				alert("Favor de elegir una opcion");
				break;
			//celcius a kelvin
			case 1:
				resultado = numero1 + 273.15;
				break;
			//celcius a fahrenheit	
			case 2:
				resultado = numero1 * (1.8) + 32;
				break;
			//fahrenheit a celcius
			case 3:
				resultado = ((numero1-32)*5)/9;
				break;
			case 4:
				resultado = ( ( ( (numero1-32)*5))/9)+273.15;
				break;
			case 5:
				resultado = numero1 -273.15;
				break;
			case 6:
				resultado = ( ( ( ( numero1-273.15)*9)/5)+32);
				break;

		}

		document.getElementById("resultado").value = resultado;
	} else {
		alert("numero invalido ingresado");
		document.getElementById("opciones").selectedIndex = "0";

	}
}
//validacion de dato que sea numerico
function validar(num1){
	if(isNaN(num1)){
		return false;
	} else {
		return true;
	}
}