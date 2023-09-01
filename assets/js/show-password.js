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

var eye2 = document.getElementById("eye2");
var passInput2 = document.getElementById("password-check");

if (eye2 != null) {
    eye2.addEventListener("click", function () {
        if (passInput2.type === "password") {
            passInput2.type = "text";
            eye2.src = "assets/images/icons/eye-off.svg";
        } else {
            passInput2.type = "password";
            eye2.src = "assets/images/icons/eye-on.svg";
        }
    });
}