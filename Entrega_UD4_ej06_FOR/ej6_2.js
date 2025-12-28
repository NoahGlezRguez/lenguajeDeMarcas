
let num = parseInt(prompt("Introduce un número"));

let resultados = "";

for(let i = 0; i <= num; i++){
	if (i % 2 == 0)
		resultados += i + " es par\n";
	else
		resultados += i + " es impar\n";
}

console.log(resultados);