/*
Filename: AdvancedWebFormValidation.js

This code demonstrates advanced web form validation using javascript.
The code includes multiple validation functions and error handling.

*/

// Function to validate email address
function validateEmail(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(String(email).toLowerCase());
}

// Function to validate phone number
function validatePhoneNumber(phoneNumber) {
    var re = /^(\+?\d{1,3})?-?(\d{1,4})?-?(\d{1,4})?-?(\d{1,9})$/;
    return re.test(phoneNumber);
}

// Function to validate password strength
function validatePassword(password) {
    var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
}

// Function to validate date
function validateDate(date) {
    var re = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d{2}$/;
    return re.test(date);
}

// Function to validate credit card number
function validateCreditCard(creditCardNumber) {
    var re = /^4[0-9]{12}(?:[0-9]{3})?$/;
    return re.test(creditCardNumber);
}

// Function to validate postal code
function validatePostalCode(postalCode) {
    var re = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    return re.test(postalCode);
}

// Main function to handle form submission
function submitForm() {
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword ').value;
    var dateOfBirth = document.getElementById('dateOfBirth').value;
    var creditCardNumber = document.getElementById('creditCardNumber').value;
    var postalCode = document.getElementById('postalCode').value;

    var isValid = true;
    var errorMessage = "";

    if (!validateEmail(email)) {
        isValid = false;
        errorMessage += "Invalid email address!\n";
    }

    if (!validatePhoneNumber(phoneNumber)) {
        isValid = false;
        errorMessage += "Invalid phone number!\n";
    }

    if (!validatePassword(password)) {
        isValid = false;
        errorMessage += "Invalid password!\n";
    }

    if (confirmPassword !== password) {
        isValid = false;
        errorMessage += "Passwords do not match!\n";
    }

    if (!validateDate(dateOfBirth)) {
        isValid = false;
        errorMessage += "Invalid date of birth!\n";
    }

    if (!validateCreditCard(creditCardNumber)) {
        isValid = false;
        errorMessage += "Invalid credit card number!\n";
    }

    if (!validatePostalCode(postalCode)) {
        isValid = false;
        errorMessage += "Invalid postal code!\n";
    }

    if (isValid) {
        // Submit the form
        document.forms[0].submit();
    } else {
        // Display error message
        alert(errorMessage);
    }
}

// Event listener for form submission
document.forms[0].addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    submitForm(); // Call the submitForm function
});