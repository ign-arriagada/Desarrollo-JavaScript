alert("hola");

var miJSON = [
	{
		"codigo":"001",
		"nombre":"Calculo"
	},{
		"codigo":"002",
		"nombre":"Fisica"
	},{
		"codigo":"003",
		"nombre":"Algoritmo"
	}
];

function leerJSON(json){
	var out = "";
	var i;
	for ( i = 0; i <json.length; i++) {
		alert("Codigo: "+ json[i].codigo+ "Nombre: "+json[i].nombre);
	}
}	

leerJSON(miJSON);