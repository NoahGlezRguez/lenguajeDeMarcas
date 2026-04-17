let boton = document.getElementById("reg");


function mostrarMSg(event){
	event.preventDefault();
	alert("Página en proceso de creación, vete a dormir");
}

boton.addEventListener("submit", mostrarMSg);
