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

(function() {
    emailjs.init("iPXyFM_v59tYW7l2E"); // from EmailJS dashboard
})()
function sendEmail(e) {
    e.preventDefault();
    const btn = e.target.querySelector("button");
    btn.disabled = true;
    btn.classList.add("contact-me-button-disabled");
    btn.textContent = "Sending...";

    emailjs.sendForm("service_9b4h1am", "template_nb8qjqq", e.target)
        .then(() => {
            btn.disabled = false;
            btn.classList.remove("contact-me-button-disabled");
            btn.textContent = "Contact";
            showAlert("Message sent!", false); // show green alert
        }, (error) => {
            btn.disabled = false;
            btn.classList.remove("contact-me-button-disabled");
            btn.textContent = "Contact";
            showAlert("Failed: " + JSON.stringify(error), true); // show red alert
        });
}


