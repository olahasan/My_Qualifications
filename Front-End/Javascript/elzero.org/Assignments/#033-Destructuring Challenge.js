====>>>> https://codepen.io/olahasan/pen/xxWBvyV
====>>>>­­ https://elzero.org/javascript-2021-destructuring-challenge/

let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];


//Destructure
let {title: t, age: a, available: v, skills: [ , s] } = myFriends[chosen -1]

console.log(`hi ${t} your age is ${a} you are ${v?"available":"not available" } your skills is ${s}`)


