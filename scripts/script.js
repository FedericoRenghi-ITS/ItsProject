function toggleMenu() {
  console.log("Menu toggled");
  const links = document.querySelector(".nav-links");
  links.classList.toggle("active");
}

// Event listener docs
//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

const form = document.getElementById("contact-form");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const nome = formData.get("name");
  const email = formData.get("email");
  const lastname = formData.get("lastname");
  const dob = formData.get("dob");
  const message = formData.get("message");

  var isValid = validate(nome, lastname, email, dob, message);

  if (!isValid) {
    console.error("Validation failed!");
    return;
  }

  cleanup();

  const response = await fetch("https://localhost:7139/api/Logs/formadata", {
    method: "POST",
    body: formData,
  }).then(() => showMessage())
  .error(() => console.log("server error"));
  
});

function validate(nome, lastname, email, dob, message) {
  let result = true;

  if (nome == "") {
    document.getElementById("name").classList.add("error-input");
    result = false;
  }

  if (lastname == "") {
    document.getElementById("lastname").classList.add("error-input");
    result = false;
  }

  if (email == "") {
    document.getElementById("email").classList.add("error-input");
    result = false;
  }

  if (dob == "") {
    document.getElementById("dob").classList.add("error-input");
    result = false;
  }

  if (message == "") {
    document.getElementById("message").classList.add("error-input");
    result = false;
  }

  return result;
}

function cleanup() {
  document.getElementById("name").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("message").value = "";
}

document
  .getElementById("consents")
  .addEventListener("change", async function () {
    if (this.checked) {
      document.getElementById("send-form-button").disabled = false;
    } else {
      document.getElementById("send-form-button").disabled = true;
    }
  });

const inputs = document.querySelectorAll("input, textarea");
inputs.forEach(input => {
  input.addEventListener("click", function () {
    console.log("Input cliccato!");

    // Rimuove la classe da tutti gli input
    inputs.forEach(i => i.classList.remove("error-input"));
  });
});

function showMessage() {
  const popup = document.getElementById("popup");
  popup.classList.add("show");

  // Nasconde il popup dopo 5 secondi
  setTimeout(() => {
    popup.classList.remove("show");
  }, 5000);
}
