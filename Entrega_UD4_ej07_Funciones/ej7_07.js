

function primerCharNoRep(texto){

	var letra;
	var	primeraVez = true;
	var numReps;

	for (let i = 0; i < texto.length; i++){
		numReps = 0;
		for(let j = i + 1; j < texto.length; j++){
			if (texto.charAt(i) == texto.charAt(j))
				numReps++;
		}
		
		if (numReps == 0 && primeraVez == true){
			letra = texto.charAt(i);
			primeraVez = false;
		}
	}
	return (letra);
}

let texto = prompt("Escribe un texto aquí:");

var letra = primerCharNoRep(texto);

alert("La primera letra que no se repite en el texto que has introducido es la " + letra);