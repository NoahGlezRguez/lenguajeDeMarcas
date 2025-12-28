

function detectaCase(texto){
	
	var tieneMayus = false;
	var tieneMinus = false;
	
	for(let i = 0; i < texto.lenght; i++){
		if (texto.charAt(i) >= 65 && texto.charAt(i) <= 90)
			tieneMayus = true;
		else if (texto.charAt(i) >= 97 && texto.charAt(i) <= 122)
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