

var letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C',
'K', 'E', 'T'];

let num = prompt("Introduce un DNI (sin letra), por favor: ");

let letra = prompt("Introduce la letra de ese DNI, por favor: ");

if (num > 0 && num <= 99999999){
	if (letra == letrasDNI[num / 23])
		alert("El DNI es correcto.");
	else
		alert("El DNI es incorrecto");

}
else 
	alert("Valor incorrecto, vuelva a intentarlo más tarde si quiere.")