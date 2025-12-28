

function esPalindromo(texto){
	
	texto = texto.toLowerCase();
	
	let str1 = "", str2 = "";

	for (let i = 0; i < texto.length; i++){
		if (texto.charCodeAt(i) >= 97 && texto.charCodeAt(i) <= 122)
			str1 = str1 + texto.charAt(i);
	}

	for (let i = texto.length - 1; i >= 0; i--){
		if (texto.charCodeAt(i) >= 97 && texto.charCodeAt(i) <= 122)//hay que cuidar los indices para que funcione
		//empieza en length - 1 y debe llegar HASTA el cero
			str2 =  texto.charAt(i) + str2;
	}

	if (str1 == str2)
		alert("Es un palíndromo");
	else
		alert("No es un palíndromo");
}

let texto = prompt("Escribe un texto y te diré si es o no un palíndromo.");

esPalindromo(texto);