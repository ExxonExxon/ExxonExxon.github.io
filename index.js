// ALERTS
const navAlert = document.getElementById("alert");
const alertMsg = document.getElementById("alert-msg");

function showAlert(message, isRed) {
    alertMsg.textContent = message;
    navAlert.classList.remove("hidden");
    if (isRed) {
        navAlert.classList.remove("alert-nav-green");
        navAlert.classList.add("alert-nav-red");
    } else {
        navAlert.classList.remove("alert-nav-red");
        navAlert.classList.add("alert-nav-green");
    }

    // auto-hide after 3 seconds
    setTimeout(() => {
        navAlert.classList.add("hidden");
    }, 3000);
}


// EMAIL



