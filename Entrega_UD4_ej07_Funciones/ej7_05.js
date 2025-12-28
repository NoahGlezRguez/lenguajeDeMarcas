

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

/*
He tenido que analizar un ejemplo con una palabra, habia elegido "texto".

Con las llamadas recursivas, cada iteracion del for llamaria a la funcion recursiva,
e iria por niveles. Cada letra, por separado (t, e, x, t, o) a parte de ser una combinacion posible
como tal, genera otro nivel (llama a la funcion recursiva).

en ese nivel, cada posible combinacion (te, tx, tt, to) genera otro nivel recursivo.

tex y tet tambien generan otro nivel.

cuando el numero de combinaciones se reduce, no realiza mas llamadas porque no se cumple la condicion del
bucle (se llega al fin de la palabra y no se puede iterar mas).

gracias a que se guarda el fragmento acumulado (t, te, tex, text) y el indice (desde donde empieza a mirar con i),
no se repiten combinaciones ni se hace combinaciones con las letras en orden inverso o repetidas.

realmente, primero se consigue todas las combinaciones que empiezan por la primera letra, luego con la siguiente y asi...

como se guarda en un array y con javascript se adapta el tamaño del array, esto ayuda tambien.

luego simplemente los concateno con formato en un string y lo saco con un alert.

*/