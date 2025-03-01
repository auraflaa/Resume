// script.js

document.addEventListener("DOMContentLoaded", function() {
  const inquiryForm = document.getElementById("inquiry-form");

  inquiryForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Here you can add further validation or integration with a backend service.
    alert("Thank you for your inquiry!");
    
    // Reset the form after submission.
    inquiryForm.reset();
  });
});
