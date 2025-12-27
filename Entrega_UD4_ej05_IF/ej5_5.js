let num1 = parseInt(Math.random() * 10) + 1;

let num2 = parseInt(prompt("Escribe un nº entre el 1 y el 10: "));

if (num1 == num2)
	alert("¡Has acertado!");
else if (num1 > num2)
	alert("El número que has introducido es menor.");
else
	alert("El número que has introducido es mayor.");