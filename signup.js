// ==========================
// GUARD (run only on signup page)
// ==========================
const signupForm = document.getElementById("signupForm");
if (signupForm) {

    // ==========================
    // ELEMENT REFERENCES
    // ==========================
    const modal = document.getElementById("successModal");
    const studentIdText = document.getElementById("studentIdText");
    const copyBtn = document.getElementById("copyBtn");

    const inputs = {
        username: document.getElementById("username"),
        email: document.getElementById("email"),
        password: document.getElementById("password"),
        confirm: document.getElementById("confirm"),
    };

    const errors = {
        username: document.getElementById("usernameError"),
        email: document.getElementById("emailError"),
        password: document.getElementById("passwordError"),
        confirm: document.getElementById("confirmError"),
    };

    // ==========================
    // STUDENT ID GENERATOR
    // ==========================
    function generateStudentId() {
        return `CB-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    }

    // ==========================
    // LIVE VALIDATION
    // ==========================
    inputs.username.addEventListener("input", () => {
        errors.username.textContent = inputs.username.value ? "" : "Username is required";
    });

    inputs.email.addEventListener("input", () => {
        errors.email.textContent =
            inputs.email.value && !inputs.email.checkValidity()
                ? "Invalid email address"
                : "";
    });

    inputs.password.addEventListener("input", () => {
        errors.password.textContent =
            inputs.password.value.length < 6 ? "Minimum 6 characters" : "";
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
    document.querySelectorAll(".toggle-password").forEach(icon => {
        icon.style.cursor = "pointer";
        icon.addEventListener("click", () => {
            const target = inputs[icon.dataset.target];
            target.type = target.type === "password" ? "text" : "password";
        });
    });

    // ==========================
    // FORM SUBMIT
    // ==========================
    signupForm.addEventListener("submit", e => {
        e.preventDefault();

        if (
            !inputs.username.value ||
            inputs.password.value.length < 6 ||
            inputs.password.value !== inputs.confirm.value
        ) return;

        const studentId = generateStudentId();

        const user = {
            username: inputs.username.value.trim(),
            email: inputs.email.value.trim(),
            password: inputs.password.value,
            studentId,
        }

        localStorage.setItem(
            "codebattleUser",
            JSON.stringify(user)
        );

        studentIdText.textContent = studentId;
        modal.style.display = "flex";
    });

    // ==========================
    // COPY STUDENT ID
    // ==========================
    copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(studentIdText.textContent);
        copyBtn.textContent = "Copied ✔";
        setTimeout(() => (copyBtn.textContent = "Copy Student ID"), 2000);
    });
}