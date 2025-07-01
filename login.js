document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Hardcoded user credentials
  const users = [
    { username: "admin", password: "admin123", role: "admin" },
    { username: "teacher", password: "teach123", role: "teacher" },
    { username: "student", password: "stud123", role: "student" }
  ];

  const matchedUser = users.find(
    user => user.username === username && user.password === password
  );

  if (matchedUser) {
    // Store role in sessionStorage for later use
    sessionStorage.setItem("userRole", matchedUser.role);

    // Redirect based on role
    switch (matchedUser.role) {
      case "admin":
        window.location.href = "admin-dashboard.html";
        break;
      case "teacher":
        window.location.href = "teacher-dashboard.html";
        break;
      case "student":
        window.location.href = "student-dashboard.html";
        break;
    }
  } else {
    alert("Invalid username or password!");
  }
});
