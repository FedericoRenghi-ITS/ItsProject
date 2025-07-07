const baseURL="https://its-todo-api.azurewebsites.net/api"

document.addEventListener("DOMContentLoaded", function(){
  fetchData().then((todos) => {
    if (todos) {
      console.log("Dati ricevuti", todos);
      renderTodos(todos)
    }
  })
});




/*async function fetchData() {
  try{
    const response= await fetch (`${baseURL}/Todo`,{
      method: "GET",
      headers: {
      "x-api-key": "V4PaperYx4Ycc6zucdO6",
    },
  });
  if (!response.ok) throw new Error('Errore nella risposta')

  const todos =await response.json();
  return todos;
  }catch (error) {
    console.error('Errore API:', error);
    return null;
  }
}*/

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
