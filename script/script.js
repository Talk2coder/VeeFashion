const bookingForm = document.querySelector(".booking-form_container");
const enquireForm = document.querySelector(".enquire-form_container");
const scrollBtn = document.querySelector(".scrollup_btn");
const headerNavBar = document.querySelector(".nav-links");
const headerNavIcon = document.querySelector(".menubar");
const firstName = document.querySelector(".firstname");
const lastName = document.querySelector(".lastname");
const email = document.querySelector(".email");
const phoneNumber = document.querySelector(".phone");
const address = document.querySelector(".address");
const date = document.querySelector(".date");
const duration = document.querySelector(".duration");
const message = document.querySelector(".message");
const errorMsg = document.querySelector(".error-mssg");
const fullName = document.querySelector(".fullname");
const enquireEmail = document.querySelector(".enquire-email");
const enquireMessage = document.querySelector(".enquire-textarea");



headerNavIcon.addEventListener("click", () => {
    headerNavBar.classList.toggle("headervisible");
})
window.onscroll = () => {
    if (!scrollBtn) return;
    if (window.scrollY > 100) {
        scrollBtn.style.display = "flex"
    }
    else {
        scrollBtn.style.display = "none"

    }
}



// Show or hide error message
function showError() {
    errorMsg.style.display = "flex";
}
function clearError() {
    errorMsg.style.display = "none";
}

// Function to hide error when user types
function clearErrorOnInput(inputElement) {
    inputElement.addEventListener("input", () => {
        errorMsg.style.display = "none";
    });
}


[firstName, lastName, email, phoneNumber, address, date, duration, message, fullName, enquireEmail, enquireMessage].forEach(input => {
    if (input) clearErrorOnInput(input);
});


if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
        e.preventDefault()
        if (firstName.value === "" || lastName.value === "" || email.value === "" || phoneNumber.value === "" || address.value === "" || date.value === "" || duration.value === "" || message.value === "") {
            showError();
        }
        else {
            clearError();
            alert("Form submitted successfully!")
            bookingForm.reset();

        }
    });
}
if (enquireForm) {
    enquireForm.addEventListener("submit", (e) => {
        e.preventDefault()
        if (fullName.value === "" || enquireEmail.value === "" || enquireMessage.value === "") {
            showError();
        }
        else {
            clearError();
            alert("Form submitted successfully!")
            enquireForm.reset();

        }
    });
}

AOS.init();
