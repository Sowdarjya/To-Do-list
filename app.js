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
    task.innerHTML = `<span>${input.value}</span><i class="fa-solid fa-trash">`;
    console.log(task);
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
});
