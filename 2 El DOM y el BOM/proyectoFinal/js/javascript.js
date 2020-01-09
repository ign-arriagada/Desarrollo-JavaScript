var json_alumnos = [{}];

function registrar() {
	//Recorrer y dibujar tabla para mostrar valores
	var codigo = document.getElementById("codigo").value;
	var nombre = document.getElementById("nombre").value;
	var nota = document.getElementById("nota").value;

	var cadena = '{"codigo":"'+codigo+'","nombre":"'+nombre+'","nota":"'+nota+'"}';
	json_alumnos.push(JSON.parse(cadena));

	//Obtener cabeceras de la tabla
	var col = [];
        for (var i = 0; i < json_alumnos.length; i++) {
            for (var llave in json_alumnos[i]) {
                if (col.indexOf(llave) == -1) {
                    col.push(llave);
                }
            }
        }
    //Crear nueva tabla
    var tabla = document.createElement("table");
    var tr = tabla.insertRow(-1); //-1 indica que el valor se agrega al final de los elementos agregados

    for (var i = 0; i < col.length; i++) {
    	var th = document.createElement("th"); //crear elemento THeader para los titulos
    	th.innerHTML = col[i]; //Otorgar el valor de llave a la columna de cabecera
    	tr.appendChild(th); //añadir el elemnto TH al elemnto TR actual
    } //Hasta acá solo la cabecera esta agregada a la tabla

    //Poblar la tabla con la informacion del json_alumnos
    for (var i = 1; i < json_alumnos.length; i++) {
    	tr = tabla.insertRow(-1); //Se agrega una nueva fila al final, con -1 no hay que indicar la posición
    	for (var x = 0; x < col.length; x++) {
    		var td = tr.insertCell(-1); //agregar nueva columna a la fila
    		td.innerHTML = json_alumnos[i][col[x]];//agregar el valor correspondiente
    	}
    } //Tabla poblada, queda agregegarla al documento

    var contenedorTabla = document.getElementById("contenedorTabla");
    while (contenedorTabla.firstChild) {//se limpia el div para eliminar la tabla anterior
    	contenedorTabla.removeChild(contenedorTabla.firstChild);
  	}
    contenedorTabla.appendChild(tabla); //se añade la tabla al div
}

function promedio() {
	var salida = "El promedio de notas es: ";
	var suma =0;
	for (var i = 0; i < json_notas.length; i++) {
		suma +=   json_notas[i].nota; //sumar todas las notas
	}
	alert("El promedio es: "+ salida + suma/json_notas.length);//dividir la suma por el total de elementos del json
}

function mayorNota(){
	var notas = [];
	for (var i = 0; i < json_notas.length; i++) {
		//Extraer solo notas del JSON y guardarlas en un array
		notas.push(json_notas[i].nota);
	}
	//usar Math para retornar el valor maximo del array
	//luego extrer la posicion del maximo valor del array para llamar al nombre del alumno desde el json, ya que está en el mismo orden
	alert("La nota mayor es "+ Math.max.apply(Math, notas ) + " del alumno: "+ json_notas[notas.indexOf(Math.max.apply(Math,notas))].nombre); 
}

function menorNota(){
	var notas = [];
	for (var i = 0; i < json_notas.length; i++) {
		notas.push(json_notas[i].nota);
	}
	//usar Math para retornar el valor minimo del array
	//luego extrer la posicion del minimo valor del array para llamar al nombre del alumno desde el json, ya que está en el mismo orden
	alert("La nota mayor es "+ Math.min.apply(Math, notas ) + " del alumno: "+ json_notas[notas.indexOf(Math.min.apply(Math,notas))].nombre); //usar Math para retornar el valor maximo del array);
	
}
