var eye = document.getElementById("eye");
var passInput = document.getElementById("password");

eye.addEventListener("click", function () {
    if (passInput.type === "password") {
        passInput.type = "text";
        eye.src = "assets/images/icons/eye-off.svg";
    } else {
        passInput.type = "password";
        eye.src = "assets/images/icons/eye-on.svg";
    }
});

// FORM VALIDATION
var signin = document.getElementById("signin-form");
var emailInput = document.getElementById("email");
var emailError = document.getElementById("email-error");
var passError = document.getElementById("pass-error");

signin.addEventListener("submit", function (e) {
    if (emailInput.value == "") {
        emailError.style.display = "inline-block";
        setTimeout(function () {
            emailError.style.display = "none";
        }, 3000);
        e.preventDefault();
    } else if (passInput.value == "") {
        passError.style.display = "inline-block";
        setTimeout(function () {
            passError.style.display = "none";
        }, 3000);
        e.preventDefault();
    }
});