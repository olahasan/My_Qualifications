====>>>> https://codepen.io/olahasan/pen/eYMoOmp?editors=0010
====>>>>­­ https://elzero.org/javascript-bootcamp-assignments-lesson-from-123-to-133/


//first question

let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);

console.log(setOfNumbers); // {10, 20, 2}

let ola = setOfNumbers.keys()
// console.log(ola) //Iterator {10, 20, 2}
ola.next().value
ola.next().value
console.log(ola.next().value)

// Needed Output
// Set(3) {10, 20, 2}
// 2
////////////////////////////////////////////////////////////////////////////////
//second question

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

let myTry = new Set(myFriends); //{'Osama', 'Ahmed', 'Sayed', 'Mahmoud'}
// console.log(myTry)
console.log(Array.from(myTry).sort())

// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']
////////////////////////////////////////////////////////////////////////////////
//third question

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let myMap = new Map ([
  ["username", "Osama"],
  ["role", "Admin"],
  ["country", "Egypt"],
]);
// myMap.set("username", "Osama");
// myMap.set("role", "Admin");
// myMap.set("country", "Egypt");

console.log(myMap);
console.log(myMap.size);
console.log(myMap.has("role"));

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true
////////////////////////////////////////////////////////////////////////////////­­­­
//fourth question

let theNumber = 100020003000;

console.log(+(Array.from(theNumber.toString(),function(ele){
 return  +ele!==0? ele:""
}).filter(function(ele){
  return isNaN(ele)?"":ele
}).join("")

))

// Needed Output
123

////////////////////////////////////////////////////////////////////////////////
//fifth question

let theName = "Elzero";

console.log(theName.split(""));
console.log([...theName]);
console.log(Array.from(theName));
console.log(Object.assign([],theName));

for(let i=0; i<theName.length; i++){
console.log(theName[i].split(""))
}
// let my = new set(theName )
// console.log(my)
// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']

////////////////////////////////////////////////////////////////////////////////
//sixth question

// let chars = ["A", "B", "C", "D", "E", w10, 15, 6];
let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// let chars = ["Z", "Y", "A", "D", "E", 10, 1];

  console.log(chars)
  console.log(chars.length)
console.log(`*************`)

let charFilter = chars.filter(function(ele){
     return isNaN(ele)
   })
   console.log(charFilter)
   console.log(charFilter.length)
console.log(`*************`)

let charsMcharFilter = ((chars.length) - (charFilter.length));
console.log(charsMcharFilter)

let hA = chars.copyWithin(charsMcharFilter)
console.log(hA)

// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']
// ["Z", "Y", "Z", "Y", "A", "D", "E"]

////////////////////////////////////////////////////////////////////////////////
//seventh question

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

1- console.log([...numsOne, ...numsTwo])
2- console.log(numsOne.concat(numsTwo))

3- numsOne .push(...numsTwo)
console.log(numsOne )
// Needed Output
// [1, 2, 3, 4, 5, 6]
////////////////////////////////////////////////////////////////////////////////
//eighth question

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

1- console.log([...numsOne, ...numsTwo])
2- console.log(numsOne.concat(numsTwo))

3- numsOne .push(...numsTwo)
console.log(numsOne )
// Needed Output
// [1, 2, 3, 4, 5, 6]



// السؤال الثامن 
// وصلت للمطلوب لكن دون الإلتزام بالشروط
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

let u = [...n1, ...n2]
let nU=new Set(u)
// let nUt = nU[1]*nU[2]
console.log(Array.from(nU));
console.log(Array.from(nU).length);
// console.log(Array.from(nU)[1]);
// console.log(Array.from(nU)[2]);
console.log((Array.from(nU)[1])*(Array.from(nU)[2]));
console.log((Array.from(nU)[1])*(Array.from(nU)[2])/(Array.from(nU).length));

console.log(`************************`);
console.log(((Array.from(nU)[1])*(Array.from(nU)[2])/(Array.from(nU).length))+(Array.from(nU)[0]));
// Needed Output
210

****************************************  
//other way 
****************************************
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
console.log( [...n1, ...n2].length *  Math.max(...n2))

// Needed Output
210
