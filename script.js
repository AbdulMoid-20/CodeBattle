// ==========================
// ICONS
// ==========================
lucide.createIcons();

// ==========================
// SIDEBAR ACTIVE LINK
// ==========================
document.querySelectorAll(".navigation li").forEach(item => {
    item.addEventListener("click", function () {
        document.querySelectorAll(".navigation li")
            .forEach(li => li.classList.remove("hovered"));
        this.classList.add("hovered");
    });
});

// ==========================
// SIDEBAR TOGGLE
// ==========================
const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");
const main = document.querySelector(".main");

if (toggle) {
    toggle.addEventListener("click", () => {
        navigation.classList.toggle("active");
        main.classList.toggle("active");
    });
}

// ==========================
// CLOSE SIDEBAR ON MOBILE CLICK
// ==========================
document.addEventListener("click", e => {
    if (
        window.innerWidth <= 768 &&
        navigation.classList.contains("active") &&
        !navigation.contains(e.target) &&
        !toggle.contains(e.target)
    ) {
        navigation.classList.remove("active");
    }
});

// ==========================
// THEME TOGGLE
// ==========================
const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
}

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light");
        localStorage.setItem(
            "theme",
            document.body.classList.contains("light") ? "light" : "dark"
        );
    });
}

// ==========================
// LOGOUT
// ==========================
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("codebattleLoggedIn");
        window.location.href = "./account/login.html";
    });
}

// ==========================
// QUIZ DATA
// ==========================
// const quizResults =
//     JSON.parse(localStorage.getItem("quizResults")) || [
//         { date: "Mon", score: 70 },
//         { date: "Tue", score: 85 },
//         { date: "Wed", score: 60 },
//         { date: "Thu", score: 90 },
//         { date: "Fri", score: 75 }
//     ];

localStorage.setItem("quizResults", JSON.stringify(quizResults));

// ==========================
// RENDER CHART
// ==========================
const chart = document.querySelector(".chart");
if (chart) {
    chart.innerHTML = "";
    quizResults.forEach(r => {
        const bar = document.createElement("div");
        bar.className = "bar";
        bar.style.setProperty("--value", `${r.score}%`);
        bar.textContent = r.date;
        chart.appendChild(bar);
    });
}

// ==========================
// RECENT QUIZZES
// ==========================
const recentList = document.getElementById("recentQuizzes");
if (recentList) {
    recentList.innerHTML = "";
    quizResults.slice(-4).reverse().forEach(r => {
        recentList.innerHTML += `
      <li>
        <span>${r.date} Quiz</span>
        <span class="score">${r.score}%</span>
      </li>`;
    });
}

// ==========================
// CHART.JS – PERFORMANCE CHART
// ==========================
const quizResults =
    JSON.parse(localStorage.getItem("quizResults")) || [
        { date: "Mon", score: 70 },
        { date: "Tue", score: 85 },
        { date: "Wed", score: 60 },
        { date: "Thu", score: 90 },
        { date: "Fri", score: 75 }
    ];

// Extract labels & data
const labels = quizResults.map(q => q.date);
const scores = quizResults.map(q => q.score);

// Chart context
const ctx = document.getElementById("performanceChart");

if (ctx) {
    new Chart(ctx, {
        type: "bar", // change to 'line' if you want
        data: {
            labels,
            datasets: [
                {
                    label: "Score (%)",
                    data: scores,
                    backgroundColor: "#14b8a6",
                    borderRadius: 8,
                    barThickness: 28
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 1000,
                easing: "easeOutQuart"
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: ctx => `${ctx.raw}%`
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: "rgba(148,163,184,0.2)"
                    },
                    ticks: {
                        color: getComputedStyle(document.body)
                            .getPropertyValue("--muted")
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: getComputedStyle(document.body)
                            .getPropertyValue("--muted")
                    }
                }
            }
        }
    });
}

