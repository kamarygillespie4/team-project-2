const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-input-login").value.trim();
  const password = document.querySelector("#password-input-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in.");
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document
    .querySelector("#username-input-signup")
    .value.trim();
  const email = document.querySelector("#email-input-signup").value.trim();
  const password = document
    .querySelector("#password-input-signup")
    .value.trim();

  if (username && email && password) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }
  }
};

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
