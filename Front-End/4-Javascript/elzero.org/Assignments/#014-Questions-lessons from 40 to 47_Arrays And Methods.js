====>>>> https://codepen.io/olahasan/pen/wvmOaVG
====>>>>­­ https://elzero.org/javascript-bootcamp-assignments-lesson-from-040-to-047/



//first question

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
 myFriends.pop(); // ["Ahmed", "Elham", "Osama"];
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.slice(0, num )); // ["Ahmed", "Elham", "Osama"];

// third way
console.log(myFriends.slice(num-num, num )); // ["Ahmed", "Elham", "Osama"];


// fourth way
myFriends.length = num ;
console.log(myFriends);


//another ways

myFriends.length - num;
console.log(myFriends);


myFriends.pop();
console.log(myFriends); 

// myFriends.splice(3,1); 
myFriends.splice(num, myFriends.length-num); 
console.log(myFriends); 
["Ahmed", "Elham", "Osama"];

////////////////////////////////////////////////////////////////////////////////
//second question

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift(),friends.pop();

console.log(friends); // ["Eman", "Osama"]
////////////////////////////////////////////////////////////////////////////////
//third question

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = arrOne.concat(arrTwo).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
////////////////////////////////////////////////////////////////////////////////­­­­
//fourth question

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words.slice().pop().shift().slice(words.length + words.indexOf("ali")).toUpperCase()); // ZERO
// or
// console.log(words.pop().shift().slice(words.length).toUpperCase()); // ZERO
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];


// or
console.log(words.pop().shift().slice(website.length).toUpperCase());

//or
let neww = [];
neww = words.pop(); //["Elzero", "Web", "School"]
console.log(neww[0].slice(website.length).toUpperCase()); //"ZERO"
////////////////////////////////////////////////////////////////////////////////
fifth question

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

//first method
console.log(haystack.includes(needle));//true

if(haystack.includes(needle) === true){
  console.log("found");
}else{
  console.log(" not found");
}

//second method
console.log(haystack.indexOf(needle));// index of element (1)

if(haystack.indexOf(needle) !== -1){
  console.log("found");
}else{
  console.log(" not found");
}

//third method
console.log(haystack.lastIndexOf(needle));// index of element (1)

if(haystack.lastIndexOf(needle) !== -1){
  console.log("found");
}else{
  console.log(" not found");
}

//new way

if(haystack[1] === needle){
  console.log("found");
}else{
  console.log("not found");

}
////////////////////////////////////////////////////////////////////////////////
//Sixth Question

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
console.log(arr1.indexOf("a")); // -1
allArrs = arr1.concat(arr2).sort().join("").toLowerCase().slice(arr1.length - arr1.indexOf("a"));

console.log(allArrs); // fxy

//another soultion

allArrs = arr1.concat(arr2).sort().slice(-3).join("").toLowerCase();

console.log(allArrs); // fxy
