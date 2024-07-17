document.addEventListener("DOMContentLoaded", () => {
  // Handle sign up
  const signupForm = document.getElementById("signup-form");
  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("signup-email").value;
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;
    const vpassword = document.getElementById("signup-vpassword").value;

    if (password !== vpassword) {
      alert("Passwords do not match");
      return;
    }

    const userData = {
      email: email,
      password: password, // Note: In a real application, never store passwords in plain text
    };

    localStorage.setItem(username, JSON.stringify(userData));
    alert("Account created successfully!");
    signupForm.reset();
  });

  // Handle login
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const storedUserData = localStorage.getItem(username);

    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      if (userData.password === password) {
        alert("Login successful!");
        // Proceed to the next step (e.g., redirect to another page)
      } else {
        alert("Incorrect password");
      }
    } else {
      alert("Username not found");
    }

    loginForm.reset();
  });
  const resetButton = document.getElementById("reset-button");
  resetButton.addEventListener("click", () => {
    localStorage.clear();
    alert("Local storage cleared");
  });
});
