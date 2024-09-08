====>>>> https://codepen.io/olahasan/pen/LYdaweZ
====>>>>­­ https://elzero.org/javascript-2021-bom-challenge/
//the Chalange "To Do Application With Local Storage"

/////////////////////////////////////////////////////////////////////////////////////////////////
//html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>To-Do-List</title>
    <link rel="stylesheet" href="css/main.css" />
  </head>
  <body>
    <div class="container">
      <div class="form">
        <input type="text" class="input" />
        <input type="submit" class="add" value="Add Task" />
      </div>
      <div class="tasks"></div>
    </div>
    <script src="main2.js"></script>
  </body>
</html>



/////////////////////////////////////////////////////////////////////////////////////////////////
//css

body {
  font-family: Arial, Helvetica, sans-serif;
}
.container {
  width: 500px;
  margin: 20px auto;
}
.form {
  background-color: #eee;
  border-radius: 6px;
  padding: 20px;
  display: flex;
  align-items: center;
}
.input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  flex: 1;
}
.input:focus {
  outline: none;
}
.add {
  border: none;
  background-color: #f44336;
  color: white;
  padding: 10px;
  border-radius: 6px;
  margin-left: 10px;
  cursor: pointer;
}
.tasks {
  background-color: #eee;
  margin-top: 20px;
  border-radius: 6px;
  padding: 20px;
}
.tasks .task {
  background-color: white;
  padding: 10px;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s;
  cursor: pointer;
  border: 1px solid #ccc;
}
.tasks .task:not(:last-child) {
  margin-bottom: 15px;
}
.tasks .task:hover {
  background-color: #f7f7f7;
}
.tasks .task.done {
  opacity: 0.5;
}
.tasks .task span {
  font-weight: bold;
  font-size: 10px;
  background-color: red;
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  cursor: pointer;
}

/////////////////////////////////////////////////////////////////////////////////////////////////
//js

let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");
let arrayOfTasks = [];

if (localStorage.getItem("tasks")) {
  arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}
getDataToLocalStorage();

submit.onclick = function () {
  if (input.value !== "") {
    sendDataToArray(input.value);
  }
  input.value = "";
};

function sendDataToArray(DateOfTask) {
  let data = {
    id: Date.now(),
    title: DateOfTask,
    completed: false,
  };

  arrayOfTasks.push(data);
  console.log(arrayOfTasks);

  addDataToPage(arrayOfTasks);
  addDataToLocalStorage(arrayOfTasks);
}

function addDataToPage(arrayOfTasks) {
  tasksDiv.innerHTML = "";

  //   if (arrayOfTasks.length > 1) {
  //     arrayOfTasks.shift();
  //   }

  arrayOfTasks.forEach((ele) => {
    let div = document.createElement("div");
    div.className = "task";
    if (ele.completed) {
      div.className = "task done";
    }
    div.setAttribute("data-id", ele.id);
    div.appendChild(document.createTextNode(ele.title));

    let span = document.createElement("span");
    span.className = "del";
    span.appendChild(document.createTextNode("Delete"));

    div.appendChild(span);
    tasksDiv.appendChild(div);
  });
}

function addDataToLocalStorage(arrayOfTasks) {
  localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

function getDataToLocalStorage() {
  let dataFromLocalStorage = localStorage.getItem("tasks");

  if (dataFromLocalStorage) {
    let dataInArray = JSON.parse(dataFromLocalStorage);
    addDataToPage(dataInArray);
  }
}

tasksDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("del")) {
    e.target.parentElement.remove(); // remove the element from the DOM / Page
    deleteTaskFromLocalStorage(e.target.parentElement.getAttribute("data-id")); // remove the element from the Local Storage
  }

  if (e.target.classList.contains("task")) {
    // console.log(e.target);
    e.target.classList.toggle("done"); // toggle the "done-class" in element in DOM / Page
    toggleStatusTaskInArray(e.target.getAttribute("data-id")); // toggle the "done-class" in element in array to add in Local Storage
  }
});

function deleteTaskFromLocalStorage(taskId) {
  arrayOfTasks = arrayOfTasks.filter((e) => {
    return e.id != taskId;
  });
  console.log(arrayOfTasks);

  addDataToLocalStorage(arrayOfTasks);
}

function toggleStatusTaskInArray(taskId) {
  for (let i = 0; i < arrayOfTasks.length; i++) {
    if (arrayOfTasks[i].id == taskId) {
      arrayOfTasks[i].completed == false
        ? (arrayOfTasks[i].completed = true)
        : (arrayOfTasks[i].completed = false);
    }
  }
  addDataToLocalStorage(arrayOfTasks);
}

// localStorage.clear();

