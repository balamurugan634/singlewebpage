const password = document.querySelector("#pass");
const checkbox = document.querySelector("#check");
checkbox.addEventListener("click", function () {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
});
