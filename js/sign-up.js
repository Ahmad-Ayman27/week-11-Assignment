const button = document.getElementById("button");
const inName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
let list = JSON.parse(localStorage.getItem("users")) || [];

button.addEventListener("click", function () {
  const user = {
    name: inName.value.trim(),
    email: email.value.trim(),
    password: password.value.trim(),
  };

  if (!user.name || !user.email || !user.password) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "All feilds Are required",
    });
    return;
  }

  if (!/\S+@\S+\.\S+/.test(user.email)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter a valid email!",
    });
    return;
  }

  const isDuplicate = list.some((u) => u.email === user.email);
  if (isDuplicate) {
    Swal.fire({
      icon: "info",
      title: "Hmmm...",
      text: "This email is Already registerd",
    });
    return;
  }

  list.push(user);
  localStorage.setItem("users", JSON.stringify(list));

  console.log("User added:", user);
  Swal.fire({
    icon: "success",
    title: "All Done",

    text: "Email registered successfully",
  });

  clearInputs();
});

function clearInputs() {
  inName.value = "";
  email.value = "";
  password.value = "";
}
