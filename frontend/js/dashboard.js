const token = localStorage.getItem("token");

if (!token) {
    window.location.href = "login.html";
}

document.getElementById("status").innerText = "Logged in successfully";

function logout() {
    localStorage.removeItem("token");
    window.location.href = "login.html";
}
