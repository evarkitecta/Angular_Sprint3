// Exercise 7

//Avoid submit form 
function preventFormSubmit(e) {
	e.preventDefault();
}
//Get the form
let formulario = document.getElementById("form");

function validate() {
	let error = 0;

	// Get the input fields
	const inputsForm = ["fName", "fEmail", 'fAddress', 'fLastN', 'fPassword', 'fPhone'];

	// Get the error elements (No las uso, utilizo las clases de Bootstrap)
	// Regular expressions to validate
	const regExName = /^[-'a-zA-ZÀ-ÿ\s]{3,}$/i;
	const regExEmail = /^[-'a-zA-Z0-9+]{3,}@[-'a-zA-Z0-9+]+.[a-z]{2,}$/i;
	const regExAddress = /^.{3,}$/;
	const regExPassword = /^(?=.*[a-zA-ZÀ-ÿ])(?=.*\d).{3,}$/; //Se admiten acentos y debe contener como mínimo una letra y un número
	const regExPhone = /^\d{9}$/;

	const regExInputs = [regExName, regExEmail, regExAddress, regExName, regExPassword, regExPhone]

	// Validate fields entered by the user: name, phone, password, and email

	for (let i = 0; i < inputsForm.length; i++) {

		let inputId = inputsForm[i];
		let regExValidation = regExInputs[i];
		let inputValue = document.getElementById(inputId);

		if (!regExValidation.test(inputValue.value)) {
			error++;
			inputValue.classList.add("is-invalid");
		} else {
			inputValue.classList.remove("is-invalid");
			inputValue.classList.add("is-valid");
		}
	}

	if (error > 0) {
		formulario.addEventListener("submit", preventFormSubmit);
	} else {
		formulario.addEventListener("submit", preventFormSubmit); //Evitar envio formulario sin preguntar por funcion "confirmForm"
		setTimeout(confirmForm, 500);
	}
}

//Mostrar en verde todos los errores validados y confirmar el envío del formulario
function confirmForm() {
	let confirmData = confirm("Do you want to sent the form?");
	if (confirmData) {
		formulario.submit()
		alert("The form has been sent");
	} else {
		alert("The submission of the form has been canceled");
	}
}