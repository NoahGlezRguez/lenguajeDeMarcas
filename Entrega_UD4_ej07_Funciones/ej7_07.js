

function primerCharNoRep(texto){

	var numReps;

	for (let i = 0; i < texto.length; i++){
		numReps = 0;
		for(let j = 0; j < texto.length; j++){
			if (texto.charAt(i) == texto.charAt(j))
				numReps++;
		}
		
		if (numReps == 1)
			return (texto.charAt(i));
		
	}
	return (null);
}

let texto = prompt("Escribe un texto aquí:");

var letra = primerCharNoRep(texto);

if (letra != null)
	alert("La primera letra que no se repite en el texto que has introducido es la " + letra);
else
	alert("Todas las letras se repiten.");