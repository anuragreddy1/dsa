alert("JS LOADED");
const BASE_URL = "http://localhost:8007";

async function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch(
        `${BASE_URL}/auth/login?email=${email}&password=${password}`,
        { method: "POST" }
    );

    const data = await res.json();

    if (data.access_token) {
        localStorage.setItem("token", data.access_token);
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("msg").innerText = "Login failed";
    }
}

async function register() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.id) {
        document.getElementById("msg").innerText =
            "Registered successfully. Go to login.";
    } else {
        document.getElementById("msg").innerText = "Registration failed";
    }
}
