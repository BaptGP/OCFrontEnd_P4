function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll(".close");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Close modal
modalClose.forEach((btn) => btn.addEventListener("click", close));

function close(){
  modalbg.style.display = "none";
}


//Formulaire
const form = document.getElementById('form');
const errorMessages = {
  lastName: "Veuillez entrer un nom comportant 2 caractères ou plus.",
  firstName: "Veuillez entrer un prénom comportant 2 caractères ou plus.",
  email: "Veuillez entrer une adresse email valide.",
  birthdate:
    "Veuillez entrer une date de naissance respectant le format JJ/MM/AAAA.",
  quantity: "Veuillez entrer un nombre valide.",
  location: "Veuillez choisir une ville.",
  checkbox: "Veuillez accepter les conditions d'utilisations.",
};
let formulaireValid = true;
const closeBtnRed = document.getElementById("closeBtnRed");
const confirmationMsg = document.getElementById("confirmationMsg");
confirmationMsg.style.display = "none";
closeBtnRed.style.display = "none";


closeBtnRed.addEventListener("click", close);

form.addEventListener("submit", function(e){
  e.preventDefault()
  const firstName = document.getElementById('first').value;
  const lastName = document.getElementById('last').value;
  const email = document.getElementById('email').value;
  const birthDate = document.getElementById('birthdate').value;
  const quantity = document.getElementById('quantity').value;
  const radioButtons = document.querySelectorAll(".checkbox-input[type=radio]");
  const checkbox = document.getElementById("checkbox1"); 
  const regxEmail = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
  const regxDate = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
  const regxNumber = /^[0-9]+$/;
  
  if (firstName.length < 2) {
    document.getElementById('prenom').innerHTML = errorMessages.firstName;
  }else{
    document.getElementById('prenom').innerHTML = "";
  }
  if (lastName.length < 2) {
    document.getElementById('nom').innerHTML = errorMessages.lastName;
  }else{
    document.getElementById('nom').innerHTML = "";
  }
  if(!regxEmail.test(email)){
    document.getElementById('emailerror').innerHTML = errorMessages.email;
  }else{
    document.getElementById('emailerror').innerHTML = "";
  }
  if(!regxDate.test(birthDate)){
    document.getElementById('naissance').innerHTML = errorMessages.birthdate;
  }else{
    document.getElementById('naissance').innerHTML = "";
  }
  if(!regxNumber.test(quantity)){
    document.getElementById('quantityerror').innerHTML = errorMessages.quantity;
  }else{
    document.getElementById('quantityerror').innerHTML = "";
  }
  if(!checkbox.checked){
    document.getElementById('conditions').innerHTML = errorMessages.checkbox;
  } else{
    document.getElementById('conditions').innerHTML = "";
  }if(firstName.length >= 2 && lastName.length >= 2 && regxEmail.test(email) && regxNumber.test(quantity) && regxDate.test(birthDate) && checkbox.checked){
    form.style.display = "none";
    confirmationMsg.style.display = "block";
    closeBtnRed.style.display = "block";
  }

})