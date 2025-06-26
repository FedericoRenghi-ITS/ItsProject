function toggleMenu() {
  console.log("Menu toggled");
  const links = document.querySelector(".nav-links");
  links.classList.toggle("active");
}

// Event listener docs
//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

const form = document.getElementById("contact-form");

form.addEventListener("submit", async function (event) {
  console.log(event);
  event.preventDefault();

  const formData = new FormData(event.target);

  const nome = formData.get("name");
  const email = formData.get("email");
  const lastname = formData.get("lastname");
  const dob = formData.get("dob");
  const message = formData.get("message");

  if (nome == "") {
    document.getElementById("name").classList.add("error-input");
    return;
  }

  console.log(formData);

  console.log("Nome:", nome);
  console.log("Lastname:", lastname);
  console.log("Email:", email);

  // const response = await fetch("https://localhost:7139/api/Logs/formadata", {
  //   method: "POST",
  //   body: formData,
  // })
  // .then(() => alert("Messaggio inviato con successo"));
});

// function enableSendButton() {
//   const isChecked = document.getElementById("consents").checked;

//   if (isChecked) {
//     document.getElementById("send-form-button").disabled = false;
//   } else {
//     document.getElementById("send-form-button").disabled = true;
//   }
// }

document
  .getElementById("consents")
  .addEventListener("change", async function () {
    if (this.checked) {
      document.getElementById("send-form-button").disabled = false;
    } else {
      document.getElementById("send-form-button").disabled = true;
    }
  });

const input = document.getElementById("name");
input.addEventListener("click", function() {
  console.log("Input cliccato!");
  this.classList.remove('error-input');
});
