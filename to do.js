function addTask() {
  const taskInput = document.getElementById("new-task");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const taskList = document.getElementById("task-list");
  const taskItem = document.createElement("li");
  taskItem.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
            <button onclick="toggleComplete(this)">Complete</button>
        </div>
    `;
  taskList.appendChild(taskItem);
  taskInput.value = "";
}

function deleteTask(button) {
  const taskItem = button.parentElement.parentElement;
  taskItem.remove();
}

function editTask(button) {
  const taskItem = button.parentElement.parentElement;
  const taskText = taskItem.querySelector("span").innerText;
  const newTaskText = prompt("Edit your task:", taskText);
  if (newTaskText !== null) {
    taskItem.querySelector("span").innerText = newTaskText;
  }
}

function toggleComplete(button) {
  const taskItem = button.parentElement.parentElement;
  taskItem.classList.toggle("completed");
}
