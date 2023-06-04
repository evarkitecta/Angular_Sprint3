// Exercise 7

//Avoid submit form 
function preventFormSubmit(e) {
	e.preventDefault();
}

function validate() {
	var error = 0;

	//Get the form
	var formulario = document.getElementById("form");

	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById('fAddress');
	var fLastN = document.getElementById('fLastN');
	var fPassword = document.getElementById('fPassword');
	var fPhone = document.getElementById('fPhone');

	// Get the error elements (No las uso, utilizo las clases de Bootstrap)
	
	// Regular expressions to validate
	const regExName = /^[-'a-zA-ZÀ-ÿ\s]{3,}$/i;
	const regExEmail = /^[-'a-zA-Z0-9+]{3,}@[-'a-zA-Z0-9+]+.[a-z]{2,}$/i;
	const regExPassword = /^(?=.*[a-zA-ZÀ-ÿ])(?=.*\d).{3,}$/; //Se admiten acentos y debe contener como mínimo una letra y un número
	const regExAddress = /^.{3,}$/;
	const regExPhone = /^\d{9}$/;

	// Validate fields entered by the user: name, phone, password, and email
	if (!regExName.test(fName.value)) {
		error++;
		fName.classList.add("is-invalid");
	} else {
		fName.classList.remove("is-invalid");
		fName.classList.add("is-valid");
	}

	if (!regExEmail.test(fEmail.value)) {
		error++;
		fEmail.classList.add("is-invalid");
	} else {
		fEmail.classList.remove("is-invalid");
		fEmail.classList.add("is-valid");
	}

	if (!regExAddress.test(fAddress.value)) {
		error++;
		fAddress.classList.add("is-invalid");
	} else {
		fAddress.classList.remove("is-invalid");
		fAddress.classList.add("is-valid");
	}

	if (!regExName.test(fLastN.value)) {
		error++;
		fLastN.classList.add("is-invalid");
	} else {
		fLastN.classList.remove("is-invalid");
		fLastN.classList.add("is-valid");
	}

	if (!regExPassword.test(fPassword.value)) {
		error++;
		fPassword.classList.add("is-invalid");
	} else {
		fPassword.classList.remove("is-invalid");
		fPassword.classList.add("is-valid");
	}

	if (!regExPhone.test(fPhone.value)) {
		error++;
		fPhone.classList.add("is-invalid");
	} else {
		fPhone.classList.remove("is-invalid");
		fPhone.classList.add("is-valid");
	}
	 
	if (error > 0) {
		formulario.addEventListener("submit", preventFormSubmit);
	} else {
		setTimeout(confirmForm, 500);
	}
	
	//Utizo esta función para mostrar en verde los errores validados y confirmar el envío del formulario
	function confirmForm(){
		let confirmData = confirm("Do you want to sent the form?");
		if(confirmData){
			formulario.submit()
			alert("The form has been sent");
		}else{
			alert("The submission of the form has been canceled");
		}
	}
}
