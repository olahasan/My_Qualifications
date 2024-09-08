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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// main.js
/*
  Modules
  - Export Alias
  - Named Export
  - Default Export
  - Import All
*/

let a = 10;
let arr = [1, 2, 3, 4];

function saySomething() {
  return `Something`;
}

export { a as myNumber, arr, saySomething };

export default function () {
  return `Hello`;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// app.js
// import elzero, { myNumber, arr, saySomething as s } from "./main.js";

// console.log(myNumber);
// console.log(arr);
// console.log(s());
// console.log(elzero());

import * as all from "./main.js";

console.log(all);

console.log(all.myNumber);
console.log(all.arr);
