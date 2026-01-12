const API = "http://localhost:8007";

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch(
    `${API}/auth/login?email=${email}&password=${password}`,
    { method: "POST" }
  );

  const data = await res.json();

  if (res.ok) {
    localStorage.setItem("token", data.access_token);
    window.location.href = "dashboard.html"; // 🔥 THIS WAS MISSING
  } else {
    document.getElementById("msg").innerText = "Invalid login";
  }
}
