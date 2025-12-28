

function primerCharNoRep(texto){

	var indice;

	var numReps;

	for (let i = 0; i < texto.length; i++){
		numReps = 0;
		for(let j = i + 1; j < texto.length - i; j++){
			if (texto.charAt(i) == texto.charAt(j))
				numReps++;
		}
		if (numReps == 0)
			indice = texto.charAt(i);
	}

}

let texto = prompt("Escribe un texto aquí:");

primerCharNoRep(texto);