/*simple non-responsive contact form, not going to an email
but just showing alert if all fields are filled out or not*/
const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return;
  }

  alert("Thank you for your message!");

  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
});
