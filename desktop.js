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
let myForm = document.getElementById("myForm");

// Add a submit event listener to the form
myForm.addEventListener("submit", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get form input values
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  // Perform validation checks
  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields.");
  } else if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
  } else {
    // If validation passes, you can submit the form or perform other actions here
    alert("Form submitted successfully!");
    myForm.reset(); // Optional: Clear form fields after successful submission
  }
});

// Helper function to validate email address
function isValidEmail(email) {
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}
