function fetchData() {
  fetch("https://its-todo-api.azurewebsites.net/api/Todo", {
    method: "GET",
    headers: {
      "x-api-key": "V4PaperYx4Ycc6zucdO6",
    },
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch((error) => console.error("Errore API:", error));
}

function add() {
  fetch("https://its-todo-api.azurewebsites.net/api/Todo", {
    method: "POST",
    headers: {
      "x-api-key": "V4PaperYx4Ycc6zucdO6",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      description: "js test",
      isCompleted: false,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch((error) => console.error("Errore API:", error));
}
