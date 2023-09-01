var forget = document.getElementById("forget-form");
var message = document.getElementById("message");

if (forget != null) {
    forget.addEventListener("submit", function(e) {
        if (emailInput.value != "") {
            message.style.display = "block";
            setTimeout(function () {
                message.style.display = "none";
            }, 5000);
            e.preventDefault(); // it's not correct way
        }
    });
}