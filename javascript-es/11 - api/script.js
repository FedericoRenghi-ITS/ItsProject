const baseUrl = "https://its-todo-api.azurewebsites.net/api";

document.addEventListener("DOMContentLoaded", function () {
  fetchData().then((todos) => {
    if (todos) {
      console.log("Dati ricevuti:", todos);
      renderTodos(todos)
    }
  }).error((error) => {
    console.error("Errore durante il fetch dei dati:", error);
  });
});

document.querySelector("#new-todo").addEventListener("click", function () {
  document.querySelector("#new-todo").classList.remove("error-input");
});

function addTodo() {
  const input = document.querySelector("#new-todo");
  var todoText = input.value;

  if (todoText === "") {
    input.classList.remove("error-input");
    void input.offsetWidth;
    input.classList.add("error-input");
    return;
  }

  let count = document.querySelectorAll(".todo").length;
  let i = ++count;

  document.querySelector(".todos").insertAdjacentHTML(
    "beforeend",
    `
        <div class="todo-container">
          <div class="todo" id="todo-${i}">${todoText}</div>
          <input type="checkbox" name="chk-${i}" id="chk-${i}" onclick="clicked('chk-${i}')" />
        </div>
        `
  );

  //call api
  //createTodo(todoText);

  input.value = "";
  input.focus();
}

function clicked(id){
}

const container = document.querySelector(".todos");
container.addEventListener("change", function (e) {
  if (e.target && e.target.type === "checkbox") {
    console.log(e.target.id)
    var index = e.target.id.split("-").pop();
    document.querySelector(`#todo-${index}`).classList.toggle("complete");
  }
});

async function fetchData() {
  //https://its-todo-api.azurewebsites.net
  try {
    const response = await fetch(`${baseUrl}/Todo`, {
      method: "GET",
      headers: {
        "x-api-key": "V4PaperYx4Ycc6zucdO6",
      },
    });

    if (!response.ok) throw new Error("Errore nella risposta");

    const todos = await response.json();
    return todos; // Questo ritorna i dati all'interno della funzione async
  } catch (error) {
    console.error("Errore API:", error);
    return null;
  }
}

function createTodo(description, isCompleted = false) {
  fetch(`${baseUrl}/Todo`, {
    method: "POST",
    headers: {
      "x-api-key": "V4PaperYx4Ycc6zucdO6",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      description: description,
      isCompleted: isCompleted,
    }),
  }).catch((error) => console.error("Errore API:", error));
}

function renderTodos(todos) {
  todos.forEach((item, i) => {
    document.querySelector(".todos").insertAdjacentHTML(
      "beforeend",
      `
        <div class="todo-container">
          <div class="todo" id="todo-${i}">${item.description}</div>
          <input type="checkbox" name="chk-${i}" id="chk-${i}" onclick="clicked('chk-${i}')" />
        </div>
        `
    );
  });
}