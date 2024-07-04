const input = document.getElementById("userInput");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("taskList");
let counter = document.getElementById("counter");
let taskCount = 0;

addBtn.addEventListener("click", () => {
  if (input.value === "") {
    alert("Task cannot be empty");
  } else {
    let task = document.createElement("p");
    task.innerHTML = `<span id="taskName">${input.value}</span><i class="fa-solid fa-trash">`;
    taskList.appendChild(task);
    taskCount++;
    counter.innerHTML = `${taskCount}`;
  }
  input.value = "";

  const del = document.querySelectorAll(".fa-trash");
  del.forEach((button) => {
    button.onclick = () => {
      button.parentNode.remove();
      taskCount--;
      counter.innerHTML = `${taskCount}`;
    };
  });

  const taskName = document.getElementById("taskName");
  taskName.onclick = () => {
    taskName.classList.toggle("checked");
    if (taskName.classList.contains("checked")) {
      taskCount--;
      counter.innerHTML = `${taskCount}`;
    } else {
      taskCount++;
      counter.innerHTML = `${taskCount}`;
    }
  };
});
