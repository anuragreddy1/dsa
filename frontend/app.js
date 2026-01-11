const BASE_URL = "http://localhost:8007";

// REGISTER
async function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  document.getElementById("msg").innerText = JSON.stringify(data);
}

// LOGIN
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
    document.getElementById("msg").innerText = "Login successful!";
  } else {
    document.getElementById("msg").innerText = JSON.stringify(data);
  }
}

// TEST AUTH
async function me() {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/auth/me`, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  const data = await res.json();
  alert(JSON.stringify(data));
}
