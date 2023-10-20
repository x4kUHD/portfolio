document.addEventListener("DOMContentLoaded", function () {
  const emailButton = document.getElementById("email");
  emailButton.addEventListener("click", copyEmail);

  function copyEmail() {
    // Get the email address to copy
    const email = "yeonwookerickim@gmail.com"; // Replace with your actual email address

    // Create a temporary input element to copy the email text
    const tempInput = document.createElement("input");
    tempInput.value = email;
    document.body.appendChild(tempInput);

    // Select and copy the email text
    tempInput.select();
    document.execCommand("copy");

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Provide some feedback to the user (optional)
    alert("Email address copied to clipboard: " + email);
  }
});
