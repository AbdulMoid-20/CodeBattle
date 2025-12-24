// ==========================
// GUARD (run only on login page)
// ==========================
const loginForm = document.getElementById("loginForm");
if (loginForm) {

// ==========================
// ELEMENTS
// ==========================
const identifierInput = document.getElementById("identifier");
const passwordInput = document.getElementById("loginPassword");

const identifierError = document.getElementById("identifierError");
const passwordError = document.getElementById("passwordError");

const savedUser = JSON.parse(localStorage.getItem("codebattleUser"));

// ==========================
// SHOW / HIDE PASSWORD
// ==========================
document.querySelectorAll(".toggle-password").forEach(icon => {
    icon.style.cursor = "pointer";
    icon.addEventListener("click", () => {
        const input = document.getElementById(icon.dataset.target);
        input.type = input.type === "password" ? "text" : "password";
    });
});

// ==========================
// LOGIN SUBMIT
// ==========================
loginForm.addEventListener("submit", e => {
    e.preventDefault();

    identifierError.textContent = "";
    passwordError.textContent = "";

    if (!savedUser) {
        identifierError.textContent = "No account found. Please sign up.";
        return;
    }

    const isValidIdentifier =
        identifierInput.value === savedUser.studentId ||
        identifierInput.value === savedUser.email;

    if (!isValidIdentifier) {
        identifierError.textContent = "Invalid Student ID or Email";
        return;
    }

    if (!passwordInput.value) {
        passwordError.textContent = "Password is required";
        return;
    }

    if (passwordInput.value !== savedUser.password) {
        passwordError.textContent = "Incorrect password";
        return;
    }

    localStorage.setItem("codebattleLoggedIn", "true");
    window.location.href = "../dashboard.html";
});
}

