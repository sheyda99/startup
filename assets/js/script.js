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