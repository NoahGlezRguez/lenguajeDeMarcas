


function daLaVuelta(num){
	
	let numInverso = "";

	for (let i = 0; i < num.length; i++)
		numInverso = num.charAt(i) + numInverso;
	return (numInverso);
}

let num = prompt("Escribe un nº y te lo mostraré al revés :)");

let numInverso = daLaVuelta(num);

alert("Ahora el nº es " + num);