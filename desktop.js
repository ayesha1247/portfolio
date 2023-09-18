// Get all elements with the class 'icon-link'
let iconLinks = document.querySelectorAll(".icon-link");

// Add a click event listener to each icon
iconLinks.forEach(function(icon) {
  // Get the link URL from the data-link attribute
  let linkUrl = icon.getAttribute("data-link");

  // Add a click event listener to open the link in a new window when the icon is clicked
  icon.addEventListener("click", function() {
    // Open the link URL in a new window
    window.open(linkUrl, "_blank");
  });

  // Add a mouseover event listener to enlarge the icon
  icon.addEventListener("mouseover", function() {
    // Increase the icon's size on hover
    icon.style.transform = "scale(1.2)"; // You can adjust the scaling factor as needed
  });

  // Add a mouseout event listener to return the icon to its original size
  icon.addEventListener("mouseout", function() {
    // Reset the icon's size on mouseout
    icon.style.transform = "scale(1)";
  });
});
// Get a reference to the form element by its ID
// Get a reference to the form element by its ID
var myForm = document.getElementById("myForm");

// Get references to the input fields
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var messageInput = document.getElementById("message");

// Get a reference to the "Submit" button
var submitButton = document.getElementById("submitButton");

// Add a click event listener to the "Submit" button for form submission
submitButton.addEventListener("click", function() {
  var name = nameInput.value.trim();
  var email = emailInput.value.trim();
  var message = messageInput.value.trim();

  // Perform your validation checks here

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields.");
  } else if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
  } else {
    alert("Form submitted successfully!");
    myForm.reset();
  }
});

// Helper function to validate email address (same as in previous response)
function isValidEmail(email) {
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}
