const button = document.getElementById("button");


button.addEventListener("click", function () {
  const users = JSON.parse(localStorage.getItem(`users`));
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const user = users.find(function (user) {
    return user.email === email && user.password === password;
  });
  if (user) {
    sessionStorage.setItem("currentUser", JSON.stringify(user));
 
    window.location.href = "home.html"; // Redirect to the home page
  } else {
    alert("Invalid email or password. Please try again.");
  }
});
