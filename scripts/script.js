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

  alert("Messaggio inviato con successo!");

  // const response = await fetch("https://localhost:7139/api/Logs/formadata", {
  //   method: "POST",
  //   body: formData,
  // })
  // .then(() => alert("Messaggio inviato con successo"));
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

const input = document.getElementById("name");
input.addEventListener("click", function () {
  console.log("Input cliccato!");
  this.classList.remove("error-input");
});
