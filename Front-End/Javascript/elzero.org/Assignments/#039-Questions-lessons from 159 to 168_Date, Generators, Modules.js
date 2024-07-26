====>>>> https://codepen.io/olahasan/pen/qBowWXV
====>>>>­­ https://elzero.org/javascript-bootcamp-assignments-lesson-from-159-to-168/


//first question

let seconds = Date.now() / 1000; // Number Of Seconds
console.log(`Seconds ${seconds}`);

let minutes = seconds / 60; // Number Of Minutes
console.log(`Minutes ${minutes}`);

let hours = minutes / 60; // Number Of Hours
console.log(`Hours ${hours}`);

let days = hours / 24; // Number Of Days
console.log(`Days ${days}`);

let years = days / 365; // Number Of Years
console.log(`Years ${years}`);

////////////////////////////////////////////////////////////////////////////////

//second question

let dateNow = new Date();
console.log(dateNow); 

console.log("$".repeat(15));


dateNow.setFullYear(1980, 0, 1);
dateNow.setHours(0, 0, 1, 0);
console.log(dateNow);

////////////////////////////////////////////////////////////////////////////////

//third question

let dateNow = new Date();
console.log(dateNow);

console.log("$".repeat(15));

dateNow.setDate(0);
console.log(dateNow);

let Months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

console.log(
  `Previous Month Is ${
    Months[dateNow.getMonth(7)]
  } And Last Day Is ${dateNow.getDate(0)}`
);
////////////////////////////////////////////////////////////////////////////////­­­­
//fourth question
////////////////////////////////////////////////////////////////////////////////
//fifth question
