// ==========================
// ELEMENT REFERENCES
// ==========================
const form = document.getElementById("signupForm");
const modal = document.getElementById("successModal");
const studentIdText = document.getElementById("studentIdText");
const copyBtn = document.getElementById("copyBtn");

const inputs = {
    username: document.getElementById("username"),
    email: document.getElementById("email"),
    password: document.getElementById("password"),
    confirm: document.getElementById("confirm")
};

const errors = {
    username: document.getElementById("usernameError"),
    email: document.getElementById("emailError"),
    password: document.getElementById("passwordError"),
    confirm: document.getElementById("confirmError")
};

// ==========================
// STUDENT ID GENERATOR
// ==========================
function generateStudentId() {
    const year = new Date().getFullYear();
    const random = Math.floor(1000 + Math.random() * 9000);
    return `CB-${year}-${random}`;
}

// ==========================
// LIVE VALIDATION
// ==========================
inputs.username.addEventListener("input", () => {
    errors.username.textContent =
        inputs.username.value.trim() === "" ? "Username is required" : "";
});

inputs.email.addEventListener("input", () => {
    errors.email.textContent =
        inputs.email.value && !inputs.email.checkValidity()
            ? "Invalid email address"
            : "";
});

inputs.password.addEventListener("input", () => {
    errors.password.textContent =
        inputs.password.value.length < 6
            ? "Minimum 6 characters"
            : "";
});

inputs.confirm.addEventListener("input", () => {
    errors.confirm.textContent =
        inputs.confirm.value !== inputs.password.value
            ? "Passwords do not match"
            : "";
});

// ==========================
// SHOW / HIDE PASSWORD
// ==========================
const toggleIcons = document.querySelectorAll(".toggle-password");

toggleIcons.forEach(icon => {
    icon.style.cursor = "pointer";

    icon.addEventListener("click", () => {
        const targetInput = inputs[icon.dataset.target];
        targetInput.type =
            targetInput.type === "password" ? "text" : "password";
    });
});

// ==========================
// FORM SUBMIT
// ==========================
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Store values first (✔ your requirement)
    const formData = {
        username: inputs.username.value.trim(),
        email: inputs.email.value.trim(),
        password: inputs.password.value,
        confirm: inputs.confirm.value
    };

    // Validation check
    if (
        !formData.username ||
        formData.password.length < 6 ||
        formData.password !== formData.confirm
    ) {
        return;
    }

    // Generate student ID
    const studentId = generateStudentId();

    // Final user object
    const userData = {
        username: formData.username,
        email: formData.email,
        studentId
    };

    // Save to localStorage
    localStorage.setItem("codebattleUser", JSON.stringify(userData));

    // Show modal
    studentIdText.textContent = studentId;
    modal.style.display = "flex";
});

// ==========================
// COPY STUDENT ID
// ==========================
copyBtn.addEventListener("click", () => {
    const idToCopy = studentIdText.textContent;
    navigator.clipboard.writeText(idToCopy);

    copyBtn.textContent = "Copied ✔";
    setTimeout(() => {
        copyBtn.textContent = "Copy Student ID";
    }, 2000);
});





// ==========================
// ELEMENTS
// ==========================
const loginForm = document.getElementById("loginForm");
const identifierInput = document.getElementById("identifier");
const passwordInput = document.getElementById("loginPassword");

const identifierError = document.getElementById("identifierError");
const passwordError = document.getElementById("passwordError");

// ==========================
// GET SAVED USER
// ==========================
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
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Clear errors
    identifierError.textContent = "";
    passwordError.textContent = "";

    if (!savedUser) {
        identifierError.textContent = "No account found. Please sign up first.";
        return;
    }

    const identifier = identifierInput.value.trim();
    const password = passwordInput.value;

    if (!identifier) {
        identifierError.textContent = "Student ID or Email is required";
        return;
    }

    if (!password) {
        passwordError.textContent = "Password is required";
        return;
    }

    // Match identifier
    const isIdentifierValid =
        identifier === savedUser.studentId ||
        identifier === savedUser.email;

    if (!isIdentifierValid) {
        identifierError.textContent = "Invalid Student ID or Email";
        return;
    }

    // (Password check placeholder)
    // In real apps → password is checked on backend
    // Here we assume password is correct if identifier matches

    // LOGIN SUCCESS
    localStorage.setItem("codebattleLoggedIn", "true");

    // Redirect
    window.location.href = "./dashboard.html";
});
