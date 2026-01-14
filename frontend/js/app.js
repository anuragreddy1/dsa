alert("JS LOADED");

async function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        document.getElementById("msg").innerText = "Fill all fields";
        return;
    }

    try {
        const res = await fetch(
            `http://localhost:8007/auth/login?email=${email}&password=${password}`,
            { method: "POST" }
        );

        const data = await res.json();

        if (!res.ok) {
            document.getElementById("msg").innerText = data.detail || "Login failed";
            return;
        }

        // SAVE TOKEN
        localStorage.setItem("token", data.access_token);

        // REDIRECT
        window.location.href = "dashboard.html";

    } catch (err) {
        document.getElementById("msg").innerText = "Server error";
    }
}
