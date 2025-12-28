

function combinaciones(palabra){
	let combos = [];

	function recursivaCombinaciones(fragmento, indice){
		
	}

	return(combos);
}

let palabra = prompt("Por favor introduce una palabra (solo una)");

let resultado= "";

let combos = combinaciones(palabra);

for(let i = 0; i < combos.length - 1; i++)
	resultado = resultados + combos[i] + ", ";

resultado = resultado + combos[combos.length - 1] + ".";

alert("El resultado es: " + resultado);