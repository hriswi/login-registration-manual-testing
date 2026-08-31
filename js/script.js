/* ===========================================================
   Login & Registration Testing Project
   Simple JavaScript using localStorage as a "fake database"
   (No real backend / database is used - this is intentional,
   to keep the project beginner-friendly for a QA portfolio)
=========================================================== */

// ---------- Helper: get / save users from localStorage ----------
function getUsers() {
  const data = localStorage.getItem("users");
  return data ? JSON.parse(data) : [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// ---------- Password show / hide toggle ----------
function togglePassword(fieldId, iconEl) {
  const field = document.getElementById(fieldId);
  if (field.type === "password") {
    field.type = "text";
    iconEl.textContent = "🙈";
  } else {
    field.type = "password";
    iconEl.textContent = "👁";
  }
}

/* NOTE FOR TESTERS:
   On the Registration page, the "eye" icon next to Confirm Password
   was copy-pasted from the Password field and its target field id
   was not updated. This is an intentional bug (see QA/04_Bug_Reports.md
   - BUG-01) for you to find and report during manual testing. */

// =============================================================
// REGISTRATION PAGE LOGIC
// =============================================================
const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("registerName").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("registerConfirmPassword").value;

    // Clear old error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("registerEmailError").textContent = "";
    document.getElementById("registerPasswordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";

    let isValid = true;

    if (name === "") {
      document.getElementById("nameError").textContent = "Name is required.";
      isValid = false;
    }

    // NOTE: This email check is intentionally simple/loose.
    // It only checks for "something@something" and does NOT require
    // a proper domain extension like .com/.in
    // This is an intentional bug -> see QA/04_Bug_Reports.md - BUG-02
    const emailPattern = /^[^\s@]+@[^\s@]+$/;
    if (email === "") {
      document.getElementById("registerEmailError").textContent = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(email)) {
      document.getElementById("registerEmailError").textContent = "Enter a valid email address.";
      isValid = false;
    }

    if (password === "") {
      document.getElementById("registerPasswordError").textContent = "Password is required.";
      isValid = false;
    } else if (password.length < 6) {
      document.getElementById("registerPasswordError").textContent = "Password must be at least 6 characters.";
      isValid = false;
    }

    if (confirmPassword === "") {
      document.getElementById("confirmPasswordError").textContent = "Please confirm your password.";
      isValid = false;
    } else if (password !== confirmPassword && password !== "") {
      document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
      isValid = false;
    }

    if (!isValid) return;

    // Check duplicate email
    const users = getUsers();
    const existingUser = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
    if (existingUser) {
      document.getElementById("registerEmailError").textContent = "This email is already registered.";
      return;
    }

    // Save new user
    users.push({ name: name, email: email, password: password });
    saveUsers(users);

    // NOTE: The success message below is intentionally wrong.
    // It should say "Registration Successful!" but says "Login Successful!"
    // This is an intentional copy-paste bug -> see QA/04_Bug_Reports.md - BUG-05
    alert("Login Successful!");

    window.location.href = "index.html";
  });
}

// =============================================================
// LOGIN PAGE LOGIC
// =============================================================
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    document.getElementById("loginEmailError").textContent = "";
    document.getElementById("loginPasswordError").textContent = "";
    document.getElementById("loginMsg").textContent = "";

    let isValid = true;

    if (email === "") {
      document.getElementById("loginEmailError").textContent = "Email is required.";
      isValid = false;
    }

    if (password === "") {
      document.getElementById("loginPasswordError").textContent = "Password is required.";
      isValid = false;
    }

    if (!isValid) return;

    const users = getUsers();
    const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());

    if (!user) {
      document.getElementById("loginMsg").textContent = "Email not registered.";
      return;
    }

    if (user.password !== password) {
      document.getElementById("loginMsg").textContent = "Incorrect password.";
      return;
    }

    // Successful login
    localStorage.setItem("loggedInUser", JSON.stringify({ name: user.name, email: user.email }));

    // NOTE: This redirect does not use any special cache handling.
    // Because of this, clicking the browser's "Back" button after
    // logging out can still show the Dashboard page from cache.
    // This is an intentional bug -> see QA/04_Bug_Reports.md - BUG-03
    window.location.href = "dashboard.html";
  });
}

/* NOTE FOR TESTERS:
   The "Forgot Password?" link on the Login page is intentionally
   NOT wired up to any function. Clicking it does nothing.
   This is an intentional bug -> see QA/04_Bug_Reports.md - BUG-04 */

// =============================================================
// DASHBOARD PAGE LOGIC
// =============================================================
const dashboardNameEl = document.getElementById("dashboardUserName");

if (dashboardNameEl) {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!loggedInUser) {
    // Not logged in -> send back to login page
    window.location.href = "index.html";
  } else {
    dashboardNameEl.textContent = loggedInUser.name;
  }
}

function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}
