
let num1 = parseInt(prompt("Escriba un número"));

let num = num1;
let reps = num1;

let resultado = num1;

for (let i = 0; i < reps; i++){
	num1 -= i;
	resultado *= num1;
}


alert("El resultado de calcular el factorial de " + num + " es " + resultado);