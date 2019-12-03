var json_notas = [
	{
		"codigo":"A001",
		"nombre":"Bulma",
		"nota":10
	},	{
		"codigo":"A002",
		"nombre":"Krillin",
		"nota":9
	},	{
		"codigo":"A003",
		"nombre":"Goku",
		"nota":8
	},	{
		"codigo":"A004",
		"nombre":"Vegeta",
		"nota":7
	},	{
		"codigo":"A005",
		"nombre":"Ash",
		"nota":6
	},	{
		"codigo":"A006",
		"nombre":"Jack",
		"nota":5
	},	{
		"codigo":"A007",
		"nombre":"Dimitry",
		"nota":4
	},	{
		"codigo":"A008",
		"nombre":"Saitama",
		"nota":3
	},	{
		"codigo":"A009",
		"nombre":"Genos",
		"nota":2
	},	{
		"codigo":"A010",
		"nombre":"Sonic",
		"nota":1
	}
];

function mostrar() {
	//Recorrer y dibujar tabla para mostrar valores
	var salida = "<table border='1'> <tr>";
	salida += "<th>Codigo </th><th> Nombre </th><th> Nota </th> </tr>";
	for (var i = 0; i < json_notas.length; i++) {
		salida += "<tr><td>" + json_notas[i].codigo + "</td><td>" + json_notas[i].nombre + "</td><td>" + json_notas[i].nota + "</td></tr>";
	}
	salida += "</table>";

	document.getElementById("texto").innerHTML = salida;
}

function promedio() {
	var salida = "El promedio de notas es: ";
	var suma =0;
	for (var i = 0; i < json_notas.length; i++) {
		suma +=   json_notas[i].nota; //sumar todas las notas
	}
	document.getElementById("texto").innerHTML = salida + suma/json_notas.length; //dividir la suma por el total de elementos del json
}

function mayorNota(){
	var notas = [];
	for (var i = 0; i < json_notas.length; i++) {
		//Extraer solo notas del JSON y guardarlas en un array
		notas.push(json_notas[i].nota);
	}
	//usar Math para retornar el valor maximo del array
	//luego extrer la posicion del maximo valor del array para llamar al nombre del alumno desde el json, ya que está en el mismo orden
	document.getElementById("texto").innerHTML = "La nota mayor es "+ Math.max.apply(Math, notas ) + " del alumno: "+ json_notas[notas.indexOf(Math.max.apply(Math,notas))].nombre; 
}

function menorNota(){
	var notas = [];
	for (var i = 0; i < json_notas.length; i++) {
		notas.push(json_notas[i].nota);
	}
	//usar Math para retornar el valor minimo del array
	//luego extrer la posicion del minimo valor del array para llamar al nombre del alumno desde el json, ya que está en el mismo orden
	document.getElementById("texto").innerHTML = "La nota mayor es "+ Math.min.apply(Math, notas ) + " del alumno: "+ json_notas[notas.indexOf(Math.min.apply(Math,notas))].nombre;; //usar Math para retornar el valor maximo del array
}
