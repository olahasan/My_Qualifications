// html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Learn JavaScript</title>
    <link rel="stylesheet" href="main.css" />
    <style>
      body {
        background-color: #eee;
      }
      ul {
        padding: 0;
        margin: 0;
        background-color: #ddd;
        margin: 20px auto;
        padding: 20px;
        width: 400px;
        list-style: none;
        display: flex;
        justify-content: space-between;
      }
      ul li {
        width: 60px;
        height: 60px;
        border: 2px solid transparent;
        opacity: 0.4;
        cursor: pointer;
        transition: 0.3s;
      }
      ul li.active,
      ul li:hover {
        opacity: 1;
      }
      ul li:first-child {
        background-color: red;
      }
      ul li:nth-child(2) {
        background-color: green;
      }
      ul li:nth-child(3) {
        background-color: blue;
      }
      ul li:nth-child(4) {
        background-color: black;
      }
      .experiment {
        background-color: red;
        width: 600px;
        height: 300px;
        margin: 20px auto;
      }
    </style>
  </head>
  <body>
    <ul>
      <li class="active" data-color="red"></li>
      <li data-color="green"></li>
      <li data-color="blue"></li>
      <li data-color="black"></li>
    </ul>
    <div class="experiment"></div>
    <script src="main.js"></script>
  </body>
</html>

/////////////////////////////////////////////////////////////////////////////
// js
/*
  BOM [Browser Object Model]
  Local Storage Practice
*/

let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
  // If There Is Color In Local Storage
  // [1] Add Color To Div
  exp.style.backgroundColor = window.localStorage.getItem("color");
  // [2] Remove Active Class From All Lis
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  // [3] Add Active Class To Current Color
  document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log(e.currentTarget.dataset.color);
    // Remove Active Class From all Lis
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    // Add Active Class To Current Element
    e.currentTarget.classList.add("active");
    // Add Current Color To Local Storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    // Change Div Background Color
    exp.style.backgroundColor = e.currentTarget.dataset.color;
  });
});
