var input = document.querySelectorAll(".name");

var email = document.querySelector(".email");

var password = document.querySelector(".pass");

var sumbit = document.querySelector(".btn-bottom");
// var Icon = querySelectorAll(".error-icon");

var idk = document.querySelectorAll(".error-icon");

var p = document.querySelectorAll(".p");

document.forms["myForm"].addEventListener("submit", function (e) {
  e.preventDefault();

  valideForm();
});

function valideForm() {
  var firstNameValue = document.forms["myForm"]["Fname"].value;
  var lastNameValue = document.forms["myForm"]["Lname"].value;
  var emailValue = document.forms["myForm"]["email"].value;
  var passwordValue = document.forms["myForm"]["password"].value;

  if (firstNameValue == 0) {
    input[0].classList.add("error-input");
    p[0].classList.remove("hidden");
    idk[0].classList.remove("hidden");
  } else {
    input[0].classList.remove("error-input");
    p[0].classList.add("hidden");
    idk[0].classList.add("hidden");
  }

  if (lastNameValue == 0) {
    input[1].classList.add("error-input");
    p[1].classList.remove("hidden");
    idk[1].classList.remove("hidden");
  } else {
    input[1].classList.remove("error-input");
    p[1].classList.add("hidden");
    idk[1].classList.add("hidden");
  }

  if (passwordValue == 0) {
    password.classList.add("error-input");
    p[3].classList.remove("hidden");
    idk[3].classList.remove("hidden");
  } else {
    password.classList.remove("error-input");
    p[3].classList.add("hidden");
    idk[3].classList.add("hidden");
  }

  if (emailValue == 0) {
    email.classList.add("error-input");
    p[2].classList.remove("hidden");
    idk[2].classList.remove("hidden");
    emailCheck(emailValue);
  } else {
    email.classList.remove("error-input");
    p[2].classList.add("hidden");
    idk[2].classList.add("hidden");
  }
}

function emailCheck(email) {
  if (/[@]/.test(email.value) === true) {
    exists = true;
  }
}
