====>>>> https://codepen.io/olahasan/pen/gOeEavw?editors=1010
====>>>>­­ https://elzero.org/javascript-2021-array-challenge/#google_vignette


//  first question
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// console.log(my.indexOf("o")); //-1
// console.log( counter - my.indexOf("o")); //4
// console.log( counter + my.indexOf("o")); //2
// console.log(my.splice(4,2));
// console.log(my.splice(( counter - my.indexOf("o")),( counter + my.indexOf("o"))));


// my.splice(( counter - my.indexOf("o")),( counter + my.indexOf("o")));
// my.reverse();
// console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

//another way

my = my.slice(zero,counter+ -(my.indexOf("o"))).reverse();

console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  Second Question
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// console.log(my.indexOf("o")); //-1
// console.log( counter - my.indexOf("o")); //4
// console.log( (counter - my.indexOf("o")) + ((my.indexOf("o")))); //3   4 + -1 = 3

// console.log(my.slice(1,3).reverse()); // ["Elham", "Mazero"]
console.log(my.slice(-((my.indexOf("o"))), ( (counter - my.indexOf("o")) + ((my.indexOf("o"))))).reverse()); // ["Elham", "Mazero"]

//other way

console.log(my.slice(-(my.indexOf("o")),counter).reverse()); // ["Elham", "Mazero"]

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  third Question


let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// console.log((my.slice(-((my.indexOf("o"))), ( (counter - my.indexOf("o")) + ((my.indexOf("o"))))).reverse().join(""))); // ["Elham", "Mazero"]
// console.log((my.slice(-((my.indexOf("o"))), ( (counter - my.indexOf("o")) + ((my.indexOf("o"))))).reverse().join("")).slice()); // ["Elham", "Mazero"]
// console.log(my.splice(++zero, counter));
// my.splice(--zero,++counter,"ELZERO"); // "Elzero"
// console.log(`${my[0]}`); // "Elzero"

// console.log((my.slice(-((my.indexOf("o"))), ( (counter - my.indexOf("o")) + ((my.indexOf("o"))))).reverse().join("")).slice().slice()); // ["Elham", "Mazero"]
// console.log((my.slice(-((my.indexOf("o"))), ( (counter - my.indexOf("o")) + ((my.indexOf("o"))))).reverse().join("")).slice()); // ["Elham", "Mazero"]

//try this one
my=my.slice(-(my.indexOf("o")),counter).reverse().join(""); 
my = my.slice(0,2).concat(my.slice(-4));
console.log(my); // "Elzero"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  fourth Question  
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

console.log((my.slice(-((my.indexOf("o"))), ( (counter - my.indexOf("o")) + ((my.indexOf("o"))))).reverse().join("")).slice(counter*counter)); // ["Elham", "Mazero"]

//try this one

my=my.slice(-(my.indexOf("o")),counter).reverse().join(""); 
my = my.slice(0,2).concat(my.slice(-4));
my = my.slice(-2)
console.log(my); // "ro"


