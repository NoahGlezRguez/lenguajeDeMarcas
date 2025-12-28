

function detectaCase(texto){
	
	var tieneMayus = false;
	var tieneMinus = false;

	for(let i = 0; i < texto.length; i++){
		/*	charAt no sirve aqui porque charAt de javascript devuelve una letra (string de un caracter de largo)
			mientra que java devuelve un char, que es un número del código ascii
		*/

		if (texto.charCodeAt(i) >= 65 && texto.charCodeAt(i) <= 90)
			tieneMayus = true;
		else if (texto.charCodeAt(i) >= 97 && texto.charCodeAt(i) <= 122)
			tieneMinus = true;

	}
	if (tieneMayus && tieneMinus)
		alert("El texto tiene mayúsculas y minúsculas.");
	else if (tieneMayus && !tieneMinus)
		alert("El texto no contiene minúsculas, pero SÍ contiene mayúsculas.");
	else if (!tieneMayus && tieneMinus)
		alert("El texto no contiene mayúsculas, pero SÍ contiene minúsculas.");
	else
		alert("Este texto no contiene letras.");
}

let texto = prompt("Escriba un texto.");

detectaCase(texto);