
let ane = "Ane", oi = "Oihan", jo = "Jon", zu = "Zuri", ma = "Maria", ant = "Antton"

let clasificaciones = [ane, oi, jo, zu, ma, ant];

alert("Clasificación actual:\n1º " + clasificaciones[0] + "\n2º " + clasificaciones[1] + "\n3º " + clasificaciones[2] 
		+ "\n4º " + clasificaciones[3] + "\n5º " + clasificaciones[4] + "\n6º " + clasificaciones[5]);

let tmp = clasificaciones.indexOf(zu);

clasificaciones[clasificaciones.indexOf(jon)] = zu;
clasificaciones[tmp] = jon;

tmp = clasificaciones.indexOf(ant);

clasificaciones.splice(tmp, 1);

tmp = clasificaciones.indexOf(ane) + 1;
clasificaciones.splice(tmp, 0, "Eneko", "Amaia");

clasificaciones.splice(0, 0, "Mariana");

alert("Clasificación actual:\n1º " + clasificaciones[0] + "\n2º " + clasificaciones[1] + "\n3º " + clasificaciones[2] 
		+ "\n4º " + clasificaciones[3] + "\n5º " + clasificaciones[4] + "\n6º " + clasificaciones[5] + "\n7º " + clasificaciones[6]
		+ "\n8º " + clasificaciones[7] + "\n9º " + clasificaciones[8]);