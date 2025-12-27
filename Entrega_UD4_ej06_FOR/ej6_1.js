
let num1 = parseInt(prompt("Escriba un número"));

let resultado = 1;

for (let i = num1; i > 0; i--)//cada iteracion multiplica a 'resultado' por 'num1' y resta 1 a 'num1'
	resultado *= i;

alert("El resultado de calcular el factorial de " + num1 + " es " + resultado);