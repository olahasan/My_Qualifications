====>>>> https://codepen.io/olahasan/pen/wvmOXPV
====>>>>­­ https://elzero.org/javascript-bootcamp-assignments-lesson-from-071-to-078/


//first question

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let ola = mix.map(function(ele){
return isNaN(parseInt(ele))? ele: "" ;
}).reduce(function(acc, current){
return `${acc}${current}`
})
console.log(ola); // Elzero
////////////////////////////////////////////////////////////////////////////////
//second question

let myString = "EElllzzzzzzzeroo";

let t = myString.split("").filter(function(ele, index, Array){
return Array.indexOf(ele) === index
}).reduce(function(acc, current){
  return `${acc}${current}`
});
console.log(t); // Elzero
////////////////////////////////////////////////////////////////////////////////
//third question

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let ola = myArray.reduce(function(acc,current){
return acc.concat(current)
},[]).join("");
console.log(ola);

// Elzero

// other slotion
// لكن هو طلب مانستخدمش ال فلات
let myArray = ["E", "l", "z", ["e", "r"], "o"];

console.log(myArray.flat().join("")); // Elzero
////////////////////////////////////////////////////////////////////////////////­­­­
//fourth question

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let ola = numsAndStrings.filter(function(ele){
return !isNaN(ele);
}).map(function(ele){
return -ele
});
console.log(ola); // [-1, -10, 10, 20, -5, -3]

//another slotion
let num = numsAndStrings.filter(function(ele){
  return isNaN(ele)? "":ele
}).map(function(ele){
return -ele
})
console.log(num); // [-1, -10, 10, 20, -5, -3]
////////////////////////////////////////////////////////////////////////////////
//fifth question

let nums = [2, 12, 11, 5, 10, 1, 99];

let ola = nums.reduce(function(acc, current){
  return current%2 !== 0 ? acc + current : acc * current
// return `${acc} ${current}`
},1);
console.log(ola); // 500
////////////////////////////////////////////////////////////////////////////////

// challenge 71:78
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z"

let ola = myString.split("").filter(function(ele, index, Array){
  return isNaN(ele) && ele !== "," && !ele.includes(Array[Array.length - true]) ;  
  }).map(function(ele){
return ele ==="_"?" " :ele;
  }).reduce(function(acc,current){
return acc === current ? acc : acc+current;
  });
  
  console.log(ola); // Elzero Web School
