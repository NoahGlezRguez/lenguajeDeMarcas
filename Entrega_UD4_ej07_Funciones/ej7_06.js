

/* Tener en cuenta:
- Es primo si: no tiene divisores mas que por si mismo o por 1
- Si no tiene un divisor menor que su raiz cuadrada no lo tendra mayor que esta 
*/


function esPrimo(num){

	var esPrimo = true;
	if (num < 2)
		esPrimo = false;
	else if (num == 2)
		esPrimo = true;
	else {
		for(let i = 3; i <= Math.sqrt(num); i += 2){
			if (num % i == 0)
				esPrimo = false;
		}
	}
	if (esPrimo)
		alert("Es primo");
	else
		alert("No es primo");

}

let num = parseInt(prompt("Introduce un numero"));

esPrimo(num);