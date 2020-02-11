document.forms["myformname"]["Prenom"].addEventListener('input', function () {
	
	if (form['Prenom'].value == '') {
		document.getElementById("span").style.display = "inline-block"
	} else {
		document.getElementById("span").style.display = "none"
	}

})

document.forms["myformname"]["Nom"].addEventListener('input', function () {
	
	if (form['Nom'].value == '') {
		document.getElementById("noms").style.display = "inline-block"
	} else {
		document.getElementById("noms").style.display = "none"
	}

})

document.forms["myformname"]["Age"].addEventListener('input', function () {
	
	if (form['Age'].value == '') {
		document.getElementById("ages").style.display = "inline-block"
	} else {
		document.getElementById("ages").style.display = "none"
	}

})

document.forms["myformname"]["mail"].addEventListener('input', function () {
	
	if (form['mail'].value == '') {
		document.getElementById("mails").style.display = "inline-block"
	} else { 
		
		document.getElementById("mails").style.display = "none"
	}

})

document.forms["myformname"]["password"].addEventListener('input', function () {
	
	if (form['password'].value == '') {
		document.getElementById("passwords").style.display = "inline-block"
	} else {
		document.getElementById("passwords").style.display = "none"
	}

})

document.forms["myformname"]["repassword"].addEventListener('input', function () {
	
	if (form['repassword'].value == '') {
		document.getElementById("repasswords").style.display = "inline-block"
	} else {
		document.getElementById("repasswords").style.display = "none"
	}

})

document.forms["myformname"]["adress"].addEventListener('input', function () {
	
	if (form['adress'].value == '') {
		document.getElementById("adresso").style.display = "inline-block"
	} else {
		document.getElementById("adresso").style.display = "none"
	}

})

document.forms["myformname"]["bachelor"].addEventListener('input', function () {
	
	if (form['bachelor'].value == '') {
		document.getElementById("bachelors").style.display = "inline-block"
	} else {
		document.getElementById("bachelors").style.display = "none"
	}

})

document.forms["myformname"]["promotion"].addEventListener('input', function () {
	
	if (form['promotion'].value == '') {
		document.getElementById("promotions").style.display = "inline-block"
	} else {
		document.getElementById("promotions").style.display = "none"
	}

})



document.getElementById("form").addEventListener('submit', function (event) {

	var errors = []

	var form = document.forms["myformname"]

	
				if (form['Prenom'].value == '') {
					errors.push('Le champ Prenom est vide')
				}

				if (form['Nom'].value == '') {
					errors.push('Le champ Nom est vide')
				}

				var sexes = document.forms["myformname"]["sexe"]
				var isSexeSelected = false

				for (var i = 0; i < sexes.length; i++) {
					var sexe = sexes[i]

					if (sexe.checked == true) {
						isSexeSelected = true
					}

				}

				if (isSexeSelected == false) {
					errors.push("Vous devez sÃ©lÃ©ctionner un sexe")
				}

	 			if (form['mail'].value.indexOf('@') === -1) {
					errors.push("Votre e-mail n'est pas valide");
					event.preventDefault();

				}

				if (form["mail"].value == "") {
					errors.push("Le champ e-mail est pas valide")
				}

				if (form['password'].value == '') {
					errors.push('Le champ mot de passe est vide')
				}

				if (form['repassword'].value == '') {
					errors.push('Le champ mot de passe est vide')
				}

				if (form['password'].value != form['repassword'].value) {
					errors.push('Vos mots de passe ne sont pas identiques')
				}

				if (form['adress'].value.indexOf('.') === -1) {
					errors.push("L'adresse n'est pas valide")
				}

				if (form['bachelor'].value == '') {
					errors.push('Le champ bachelor est vide')
				}

				if (form['promotion'].value == '') {
					errors.push('Le champ promotion est vide')
				}

				if (form['promotion'].value.indexOf('dev'|| 'design'|| 'market') === -1) {
					errors.push("Votre promotion n'est pas la bonne")
				}

				var tomes = document.forms["myformname"]["tomes[]"]
				var nbrOfTomesSelected = 0

				for (var i = 0; i < tomes.length; i++) {
					var tome = tomes[i]

					if (tome.checked == true) {
						nbrOfTomesSelected++
					}

				}

				if (nbrOfTomesSelected > 1) {
					errors.push("SÃ©lÃ©ctionnez un seul tome")
				}

				if (nbrOfTomesSelected == 0) {
					errors.push("Vous avez pas choisi de tome seulement")
				}

				

				if (errors.length > 0) {

					event.preventDefault();

					var errorsList = ""

					for (var i = 0; i < errors.length; i++) {
						errorsList += "<li>" + errors[i] + "</li>"
					}

					document.getElementById('errors').innerHTML = errorsList
				}
	

	


	
	
	var mail = document.getElementById("mail").value;
	var xhr = new XMLHttpRequest();
		
	xhr.onreadystatechange = function () {

		if (xhr.readyState == 4 ) {
			alert(xhr.responseText)

			if (xhr.responseText == 'pas glop') {
				event.preventDefault();
	 		}else{

	 			if (errors.length > 0) {
	 				event.preventDefault()
	 				alert(errors)
	 			}
	 			else{
	 				document.getElementById("fieldset1").style.top = "150%";
	 				document.getElementById("fieldset2").style.top = "150%";
	 				document.getElementById("fieldset3").style.top = "50%";
	 				event.preventDefault();
	 			}

			}
			}

		

	
	xhr.open("GET", "check-if-mail-exists.php?email=" + mail, true);
	xhr.send(null);

	};

	
	


	

	var sexes = document.forms["myformname"]["sexe"]
	var isSexeSelected = false

	

	var tomes = document.forms["myformname"]["tomes[]"]
	var nbrOfTomesSelected = 0

	
	
})





document.getElementById("fieldset1").style.display = 'block';
document.getElementById("fieldset2").style.display = 'none';
document.getElementById("fieldset3").style.display = 'none';

document.getElementById("button1").addEventListener("click", function (event) {
	document.getElementById("fieldset1").style.display = 'none';
	document.getElementById("fieldset2").style.display = 'block';
	document.getElementById("fieldset3").style.display = 'none';
})

document.getElementById("button2").addEventListener("click", function (event) {
	document.getElementById("fieldset1").style.display = 'block';
	document.getElementById("fieldset2").style.display = 'none';
	document.getElementById("fieldset3").style.display = 'none';
})

document.getElementById("button3").addEventListener("click", function (event) {
	document.getElementById("fieldset1").style.display = 'none';
	document.getElementById("fieldset2").style.display = 'none';
	document.getElementById("fieldset3").style.display = 'block';
		if (form["mail"].value == "moi@fruit.fr") {
						alert("Cette adresse e-mail est dÃ©jÃ  utilisÃ©")
						event.preventDefault();
					}else
						alert("Nickel! Cette adresse e-mail est pas utilisÃ©")

					

					if (form["mail"].value == "moi@fruit.fr") {
						alert("pas glop")
						
					}else 
					alert("glop")
})

document.getElementById("button4").addEventListener("click", function (event) {
	document.getElementById("fieldset1").style.display = 'none';
	document.getElementById("fieldset2").style.display = 'block';
	document.getElementById("fieldset3").style.display = 'none';
})
