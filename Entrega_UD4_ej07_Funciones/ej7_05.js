

function combinaciones(palabra){
	let combos = [];

	//esta funcion recursiva esta dentro de otra para almacenar en un array las combinaciones que salen
	function recursivaCombinaciones(fragmento, indice){
		//es recursiva para llamarse a si misma las veces que haga falta, ya que no se sabe el tamaño de la palabra
		//entonces las iteraciones necesarias las calculará sobre la marcha
		for(let i = indice; i < palabra.length; i++){
			let combiPosible = fragmento + palabra.charAt(i);//mira todas las combinaciones desde cada letra/fragmento de letras inicial
			combos.push(combiPosible);
			recursivaCombinaciones(combiPosible, i + 1);
		}
	}
	recursivaCombinaciones("", 0);
	return(combos);
}



let palabra = prompt("Por favor introduce una palabra (solo una)");

let combos = combinaciones(palabra);

let resultado = "";
for(let i = 0; i < combos.length - 1; i++)
	resultado = resultado + combos[i] + ", ";

resultado = resultado + combos[combos.length - 1] + ".";

alert("El resultado es: " + resultado);