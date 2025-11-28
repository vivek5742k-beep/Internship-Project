// Button click interactivity
function showMessage() {
    document.getElementById("msg").innerHTML = "Thanks for checking my project!";
}

// Form validation
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let status = document.getElementById("form-status");

    if (name === "" || email === "" || message === "") {
        status.style.color = "red";
        status.innerHTML = "Please fill all fields!";
        return false;
    }

    status.style.color = "green";
    status.innerHTML = "Form submitted successfully!";
    return false; // remove this when adding backend
}
