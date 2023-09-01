var forget = document.getElementById("forget-form");
var message = document.getElementById("message");
var emailInput = document.getElementById("email");

if (forget != null && emailInput != null) {
    forget.addEventListener("submit", function(e) {
        if (emailInput.value != "") {
            message.style.display = "block";
            setTimeout(function () {
                window.open('/otp.html', '_self');
            }, 3000);
            e.preventDefault(); // it's not correct way
        }
    });
}

var sentAgain = document.getElementById("sent-again");

if (sentAgain != null) {
    sentAgain.addEventListener("click", function(e) {
            message.style.display = "block";
            setTimeout(function () {
                message.style.display = "none";
            }, 5000);
            e.preventDefault();
    });
}