var signin = document.getElementById("signin-form");
var forget = document.getElementById("forget-form");

var emailInput = document.getElementById("email");
var passInput = document.getElementById("password");
var emailError = document.getElementById("email-error");
var passError = document.getElementById("pass-error");

if (signin != null) {
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
}

if (forget != null) {
    forget.addEventListener("submit", function (e) {
        if (emailInput.value == "") {
            emailError.style.display = "inline-block";
            setTimeout(function () {
                emailError.style.display = "none";
            }, 3000);
            e.preventDefault();
        }
    });
}