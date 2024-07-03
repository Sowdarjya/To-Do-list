const input = document.getElementById("userInput");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  if (input.value === "") {
    alert("Task cannot be empty");
  } else {
    let task = document.createElement("li");
    task.innerHTML = input.value;
    console.log(task);
    taskList.appendChild(task);
  }
  input.value = "";
});
