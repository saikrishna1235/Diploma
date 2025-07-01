document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorText = document.getElementById("errorText");

  const users = [
    { username: "admin", password: "admin123", role: "admin" },
    { username: "teacher", password: "teach123", role: "teacher" },
    { username: "student", password: "stud123", role: "student" }
  ];

  const matchedUser = users.find(
    user => user.username === username && user.password === password
  );

  if (matchedUser) {
    sessionStorage.setItem("userRole", matchedUser.role);

    const returnPath = sessionStorage.getItem("goAfterLogin");
    if (returnPath) {
      window.location.href = returnPath;
      sessionStorage.removeItem("goAfterLogin");
    } else {
      switch (matchedUser.role) {
        case "admin": window.location.href = "admin-dashboard.html"; break;
        case "teacher": window.location.href = "teacher-dashboard.html"; break;
        case "student": window.location.href = "student-dashboard.html"; break;
      }
    }
  } else {
    errorText.textContent = "❌ Invalid username or password!";
  }
});
