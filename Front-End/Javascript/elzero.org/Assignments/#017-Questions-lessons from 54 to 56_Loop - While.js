====>>>> https://codepen.io/olahasan/pen/NWYJGmy?editors=1010
====>>>>­­ https://elzero.org/javascript-bootcamp-assignments-lesson-from-054-to-056/


//first question


let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

for (let i = 0; i < friends.length; i++) {
  if (typeof friends[i] === "number") {
    continue;
  }
  else if (friends[i].startsWith("A")) {
    continue;
  } else {
    console.log(`${index + 1}=> ${friends[i]}`)
    index++
  }

}

// Output
// && friends[i].startsWith("A")
// "1 => Sayed"
// "2 => Mahmoud"
