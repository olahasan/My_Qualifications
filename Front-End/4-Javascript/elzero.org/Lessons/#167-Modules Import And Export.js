// html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="main.css" />
    <title>Learn JavaScript</title>
  </head>
  <body>
    <script src="main.js" type="module"></script>
    <script src="app.js" type="module"></script>
  </body>
</html>
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// main.js
/*
  Modules
  - Import And Export
*/

let a = 10;
let arr = [1, 2, 3, 4];

function saySomething() {
  return `Something`;
}

export { a, arr, saySomething };

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// app.js
import { a, arr, saySomething as s } from "./main.js";

console.log(a);
console.log(arr);
console.log(s());
