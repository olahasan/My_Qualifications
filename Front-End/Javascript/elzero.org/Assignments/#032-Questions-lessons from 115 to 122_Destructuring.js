====>>>> https://codepen.io/olahasan/pen/xxWBvyV
====>>>>­­ https://elzero.org/javascript-bootcamp-assignments-lesson-from-115-to-122/

//first question

let myNumbers = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here

let [a, b, c, d, e]  = myNumbers

console.log(a * e); // 5
////////////////////////////////////////////////////////////////////////////////

//second question

let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// Write Your Destructuring Assignment Here

let [a, b, c, [d, e, [f, g]]] = mySkills 

console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel
////////////////////////////////////////////////////////////////////////////////

//third question

let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// let all = arr1.concat(arr2,arr3)
// console.log(all);

// let [c,,,,a,b] = arr1.concat(arr3);
let [c,,,,,,,a,b] = arr1.concat(arr2,arr3);

console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed
////////////////////////////////////////////////////////////////////////////////­­­­

//fourth question

const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

const {age:a,
       working:w,
       country:c,
       hobbies:[h1, ,h3]
       } = member;

console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${c}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming
////////////////////////////////////////////////////////////////////////////////

//fifth question

const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

//Destructuring
const{
  title:t,
  developer:d,
  releases:{
    "Oath In Felghana":[u, j],
    "Ark Of Napishtim":{
      US:u_price  ,
      JAP:j_price  ,
    },
    Origin: or ,
  },
  o=Object.keys(game.releases)[0],
  a=Object.keys(game.releases)[1],
} = game

// Write Your Destructuring Assignment/s Here

console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${a}`);
// Although I Love Ark Of Napishtim

console.log(`${a} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a} Price in USA Is ${j_price}`);
// Ark Of Napishtim Price in USA Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD

////////////////////////////////////////////////////////////////////////////////

//sixth question

let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];


let {title: t, age: a, available: v, skills: [ , s] } = myFriends[chosen -1]
console.log(`hi ${t} your age is ${a} you are ${v?"available":"not available" } your skills is ${s}`)


