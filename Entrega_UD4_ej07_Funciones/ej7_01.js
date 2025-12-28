

/*	

	function nombre(parametro1, parametro2){
		codigo ejecutable
	}
		
	var x / let x = nombre(valo1, valor2);
	
*/

function esPar(num){
	if (num % 2 == 0)
		return (true);
	else
		return (false);
}

let num = parseInt(prompt("Ingresa un nº y te diré si es par."));
if (esPar(num))
	alert("Es par");
else
	alert("Es impar.");
