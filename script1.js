const form = document.getElementById("signupForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let valid = true;

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("passwordError").innerText = "";

  // Name validation
  if (name.length < 3) {
    document.getElementById("nameError").innerText =
      "Name must be at least 3 characters";
    valid = false;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").innerText =
      "Enter a valid email";
    valid = false;
  }

  // Password validation
  if (password.length < 6) {
    document.getElementById("passwordError").innerText =
      "Password must be at least 6 characters";
    valid = false;
  }

  // Final check
  if (valid) {
    alert("Signup Successful!");
  }
});