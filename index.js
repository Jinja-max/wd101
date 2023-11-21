const form = document.getElementById("registrationForm");
const userData = document.getElementById("userTableBody");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const terms = document.getElementById("terms").checked;

  const user = {
    name,
    email,
    password,
    dob,
    terms,
  };

  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  displayUsers();
  form.reset();
});

function displayUsers() {
  userData.innerHTML = "";
  const users = JSON.parse(localStorage.getItem("users")) || [];

  users.forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td>${user.password}</td>
    <td>${user.dob}</td>
    <td>${user.terms ? "true" : "false"}</td>
  `;
    userData.appendChild(row);
  });
}
displayUsers();
