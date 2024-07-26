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

let birthDay1 = new Date("apr 22, 1995");
console.log(birthDay1);

let birthday2 = new Date("1995-04-22T00:00:00");
console.log(birthday2);

let birthday3 = new Date(Date.UTC(1995, 3, 22, 0, 0, 0));
console.log(birthday3);

////////////////////////////////////////////////////////////////////////////////

//fifth question

////////// first way //////////

//start time
let start = new Date();

//start operation
for (let i = 0; i < 99999; i++) {
  document.write(`<div>${i}</div>`);
}

//end time
let end = new Date();

//operation duration

let duration = end - start;
console.log(duration);

////////// second way  using Performance.now() //////////
// Start time
let start = performance.now();

// Start operation
for (let i = 0; i < 99999; i++) {
  document.write(`<div>${i}</div>`);
}

// End time
let end = performance.now();

// Operation duration
let duration = end - start;
console.log(duration); // Output the duration in milliseconds

////////////////////////////////////////////////////////////////////////////////

//sixth question

// Write Your Generator Function Here

function* gen() {
  while (true) {
    yield Math.floor(Math.random() * 10000);
  }
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}

////////////////////////////////////////////////////////////////////////////////

//seventh question

