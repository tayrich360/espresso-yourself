
// Function to validate a name
function validateName(name) {
    // Name should contain only letters and spaces
    const regex = /^[a-zA-Z\s/-]+$/;
    return regex.test(name);
}

// Function to validate a credit card number
function validateCreditCardNumber(cardNumber) {
    // Credit card number should be a 16-digit number
    const regex = /^\d{16}$/;
    return regex.test(cardNumber);
}

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

   const emailInput = document.getElementById("email");
      const emailValue = emailInput.value;

      // Check if the email contains both "@" and ".com"
      if (!emailValue.includes("@") || !emailValue.includes(".com")) {
        alert("Please enter a valid email address.");
        event.preventDefault(); // Prevent form submission
      }
  
    // Get the form values
    const name = document.getElementById("name").value;
    if (!/^\S+\s+\S+/.test(name) || name.length <2 ) {
        alert("Please enter a valid full name");
        event.preventDefault(); // Prevent form submission
        return;
      }
  
    const creditCardNumber = document.getElementById("creditCard").value;


    // Validate the name and credit card number
    const isNameValid = validateName(name);
    const isCreditCardValid = validateCreditCardNumber(creditCardNumber);

    // Display the validation result
    const validationResult = document.getElementById("validationResult");
    validationResult.innerHTML = "";

    if (isNameValid && isCreditCardValid) {
        validationResult.textContent = "Form submitted successfully!";
      this.reset();
    } else {
        if (!isNameValid) {
            validationResult.textContent += "Name is not valid. ";
        }
        if (!isCreditCardValid) {
            validationResult.textContent += "Credit Card Number is not valid. ";
        }
    }


});



