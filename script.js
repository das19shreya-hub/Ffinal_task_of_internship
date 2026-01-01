// Dark mode toggle
function toggleMode() {
    document.body.classList.toggle("dark");

    const btn = document.querySelector(".mode-btn");
    if (document.body.classList.contains("dark")) {
        btn.innerText = "☀ Light Mode";
    } else {
        btn.innerText = "🌙 Dark Mode";
    }
}

// Home welcome
if (window.location.pathname.includes("index.html")) {
    setTimeout(() => {
        alert("Welcome to my YCSAS Internship Portfolio!");
    }, 500);
}

// About page
function changeText() {
    document.getElementById("about-msg").innerText =
        "YCSAS helped me gain hands-on web development experience.";
}

// Skills page
document.querySelectorAll("#skillList li").forEach(skill => {
    skill.addEventListener("click", () => {
        skill.style.background = "#6c63ff";
        skill.style.color = "white";
    });
});

// Internship page
function showInternship() {
    document.getElementById("intern-msg").innerText =
        "This internship improved my technical and practical skills.";
}

// Projects page
function selectProject(project) {
    document.getElementById("project-msg").innerText =
        project.innerText + " selected ✔";
}

// Contact page
function validateEmail() {
    const email = document.getElementById("email").value;
    const msg = document.getElementById("contact-msg");

    if (email === "") {
        msg.innerText = "❌ Please enter your email";
        msg.style.color = "red";
    } else {
        msg.innerText = "✅ Thank you for contacting me!";
        msg.style.color = "green";
    }
}