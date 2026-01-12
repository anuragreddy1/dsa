const token = localStorage.getItem("token");

if (!token) {
  // Not logged in
  window.location.href = "index.html";
} else {
  document.getElementById("user").innerText =
    "You are logged in successfully 🎉";
}

function logout() {
  localStorage.removeItem("token");
  window.location.href = "index.html";
}
