// Select necessary elements from the HTML
const todoList = document.getElementById("todo-list");
const loading = document.getElementById("loading");
const form = document.getElementById("todo-form");

// Asynchronous function to fetch todo data
const fetchTodos = async () => {
  const url = "https://jsonplaceholder.typicode.com/todos?_limit=5";

  const res = await fetch(url);
  const data = res.json();

  return data;
};

// Function to print todo data to the screen
const printTodos = (data) => {
  data.forEach((element) => {
    // Create an li element for each todo
    const liElement = document.createElement("li");

    // Add HTML content to the created li element
    liElement.innerHTML = `
    <strong>${element.title}</strong>
      <span class="${element.completed ? "completed" : "not-completed"}">${
      element.completed ? "Completed" : "Not Completed"
    }</span>
      `;

    // Add the created li element to the todo list
    todoList.appendChild(liElement);
  });

  // Hide the loading message
  loading.style.display = "none";
};

// Function to run when the form is submitted
form.addEventListener("submit", async function (e) {
  e.preventDefault();

  // Get title and completed values from the form
  const title = document.getElementById("title").value;
  const completed = document.getElementById("completed").checked;

  // Create a new li element
  const newListItem = document.createElement("li");

  // Add HTML content to the created li element
  newListItem.innerHTML = `
    <strong>${title}</strong>
      <span class="${completed ? "completed" : "not-completed"}">${
    completed ? "Completed" : "Not Completed"
  }</span>
    `;

  // Add the created li element to the todo list
  todoList.appendChild(newListItem);

  // Reset the form
  form.reset();
});

// Fetch todo data and print it to the screen
fetchTodos().then((data) => printTodos(data));
