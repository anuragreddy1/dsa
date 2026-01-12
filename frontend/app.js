async function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch("http://localhost:8007/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  if (res.ok) {
    document.getElementById("msg").innerText =
      "✅ Registered successfully. Please login.";
  } else {
    document.getElementById("msg").innerText =
      "❌ " + (data.detail || "Registration failed");
  }
}
