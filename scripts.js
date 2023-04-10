function check() {
    var user = document.querySelector("#username");
    var pass = document.querySelector("#password");
    var fail = document.querySelector(".error-msg");
    var error = "Log-in Error.";
    var success = "Successful Log-In";

    if (user.value.length == 0 && pass.value.length != 0) {
        fail.innerHTML = "Please enter your username.";
        console.log(error);
    }

    if (user.value.length != 0 && pass.value.length == 0) {
        fail.innerHTML = "Please enter your password.";
        console.log(error);
    }

    if (user.value.length == 0 && pass.value.length == 0) {
        fail.innerHTML = "Please put the necessary requirements.";
        console.log(error);
    }

    if (user.value.length != 0 && pass.value.length != 0) {
        fail.innerHTML = "";
        console.log(success);
    }
}