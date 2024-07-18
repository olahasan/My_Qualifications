====>>>> https://codepen.io/olahasan/pen/QWmorvZ?editors=0110
====>>>>­­ https://elzero.org/javascript-bootcamp-assignments-lesson-from-057-to-063/


//first question

function sayHello(theName, theGender) {
  // Your Code Here
  if (theGender === "Male") {
    console.log(`"Hello Mr ${theName}"`)
  } else if (theGender === "Female") {
    console.log(`"Hello Miss ${theName}"`)
  } else {
    console.log(`"Hello ${theName}"`)

  }
  // console.log(`"Hello ${theName} your gander is${theGender}"`)
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
////////////////////////////////////////////////////////////////////////////////
//second question

function calculate(firstNum, secondNum, operation) {

  if (secondNum === undefined) {
    console.log(`Second Number Not Found`);
  } else {
    if (operation === "add") {
      console.log(firstNum + secondNum);
    }
    if (operation === "subtract") {
      console.log(firstNum - secondNum);
    }
    if (operation === "multiply") {
      console.log(firstNum * secondNum);
    }
  }
  if (operation === undefined && typeof (secondNum) === "number") {
    console.log(firstNum + secondNum);
  }
}
// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

//another way
function calculate(firstNum, secondNum, operation) {
  // Your Code Here
  if (secondNum === undefined) {
    console.log("Second Number Not Found")
  } else if (operation === "add" || operation === undefined) {
    console.log(firstNum + secondNum)
  } else if (operation === "subtract") {
    console.log(firstNum - secondNum)
  } else {
    console.log(firstNum * secondNum)

  }
}

// نفس الحل لكن ب if المختصره
function calculate(firstNum, secondNum, operation) {

  secondNum === undefined
    ? console.log(`Second Number Not Found`)
    : operation === "add"
      ? console.log(firstNum + secondNum)
      : operation === "subtract"
        ? console.log(firstNum - secondNum)
        : operation === "multiply"
          ? console.log(firstNum * secondNum)
          : operation === undefined && typeof (secondNum) === "number"
            ? console.log(firstNum + secondNum);

}
// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600
  

////////////////////////////////////////////////////////////////////////////////
third question

function ageInTime(theAge) {
  // Your Code Here
  if(theAge <10 || theAge >100){
    console.log(`Age Out Of Range`);
  }
  if(theAge >10 && theAge <100){  
    console.log(`Months Example => ${theAge * 12} Months`);
    console.log(`Weeks Example => ${theAge * 12*4} Weeks`);
    console.log(`Days Example => ${theAge * 12*4*30} Days`);
    console.log(`hours Example => ${theAge * 12*4*30*24} hours`);
    console.log(`minuts Example => ${theAge * 12*4*30*24*60} minuts`);
    console.log(`secondes Example => ${theAge * 12*4*30*24*60*60} secondes`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

  
  // other solution
function ageInTime(theAge) {
  // Your Code Here
  if(theAge < 10 || theAge > 100){
    console.log("Age Out Of Range");
  }else if(theAge > 10 || theAge < 100){
    console.log(`years Example => ${theAge} year`);
    console.log(`Months Example => ${theAge*12} Month`);
    console.log(`Weeks Example => ${theAge*12*4} week`);
    console.log(`Days Example => ${theAge*12*4*30} day`);
    console.log(`Hours Example => ${theAge*12*4*30*24} hour`);
    console.log(`Minutes Example => ${theAge*12*4*30*24*60} minute`);
    console.log(`Seconds Example => ${theAge*12*4*30*24*60*60} second`);
    console.log(`*************`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
ageInTime(40); // Months Example => 456 Months
 
  
////////////////////////////////////////////////////////////////////////////////­­­­
fourth question

  function checkStatus(a, b, c) {

  if(typeof a === "string" && typeof b === "number" && typeof c === "boolean"){
    console.log(`"Hello ${a}, Your Age Is ${b},You Are Available For Hire"`);

  } else if(typeof a === "number" && typeof b === "string" && typeof c === "boolean"){
    console.log(`"Hello ${b}, Your Age Is ${a},You Are Available For Hire"`);
    
  } else if( a === true  && typeof b === "number" && typeof c === "string"){
    console.log(`"Hello ${c}, Your Age Is ${b},You Are Available For Hire"`);
  }else if( a === false  && typeof b === "string" && typeof c === "number"){
    console.log(`"Hello ${b}, Your Age Is ${c},You Are Not Available For Hire"`);
  }
}

// Needed Output
checkStatus("Osama", 38, true); 
// "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true);
 // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama");
 // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38);
 // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

//other solution
function checkStatus(a, b, c) {
  // Your Code Here
  if(typeof a === "string" && typeof b === "number"  && typeof c === "boolean"){
    if(typeof c === "boolean" && c === true){
      console.log(`"Hello ${a}, Your Age Is ${b}, You Are Available For Hire"`)
    }else{
    console.log(`"Hello ${a}, Your Age Is ${b}, You Are not Available For Hire"`)

    }
  }else if(typeof a === "number" && typeof b === "string"  && typeof c === "boolean"){
    if(typeof c === "boolean" && c === true){
      console.log(`"Hello ${b}, Your Age Is ${a}, You Are Available For Hire"`)
    }else{
    console.log(`"Hello ${b}, Your Age Is ${a}, You Are not Available For Hire"`)
    }
  }else if(typeof a === "boolean" && typeof b === "number"  && typeof c === "string"){
    if(typeof a === "boolean" && a === true){
      console.log(`"Hello ${c}, Your Age Is ${b}, You Are Available For Hire"`)
    }else{
      console.log(`"Hello ${c}, Your Age Is ${b}, You Are not Available For Hire"`)
      }
  }else if(typeof a === "boolean" && typeof b === "string"  && typeof c === "number"){
    if(typeof a === "boolean" && a === false){
      console.log(`"Hello ${b}, Your Age Is ${c}, You Are  not Available For Hire"`)
    }else{
      console.log(`"Hello ${b}, Your Age Is ${c}, You Are  Available For Hire"`)
      }
  }

} 


 
// وطريقه  منظمه أكثر لكتابه if
function checkStatus(a, b, c) {
  // Your Code Here
  if(typeof a === "boolean"){
     if(a === true && typeof b === "number" && typeof c === "string"){ 
    console.log(`"Hello ${c}, Your Age Is ${b},You Are Available For Hire"`);
    }else{
      console.log(`"Hello ${b}, Your Age Is ${c},You Are Not Available For Hire"`);
     }
     
  }else{
    if(typeof c === "boolean" && typeof a === "string" && typeof b === "number" ){
      console.log(`"Hello ${a}, Your Age Is ${b},You Are Available For Hire"`);
    }else if(typeof c === "boolean" && typeof b === "string" && typeof a === "number"){
          console.log(`"Hello ${b}, Your Age Is ${a},You Are Available For Hire"`);
    }
  }

}

// Needed Output
checkStatus("Osama", 38, true); 
// "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true);
 // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama");
 // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38);
 // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

////////////////////////////////////////////////////////////////////////////////
fifth question

  function createSelectBox(startYear, endYear) {
    
  document.write("<select>")

  for(let i = startYear; i<=endYear; i++){

    // console.log(`<option value=${i}>${i}</option>`);
    document.write(`<option value=${i}>${i} </option>`);
  }
  document.write("</select>")

}
createSelectBox(2000, 2021);
////////////////////////////////////////////////////////////////////////////////
//sixth Question

function multiply(...numbers) {

  let result = 1;  //if put it as 0 that will make all values =0 //10*0 = 0

  for (let i = 0; i < numbers.length; i++) {

    if (typeof numbers[i] === "string") {
      continue;
    } else {
      result *= Math.trunc(numbers[i]);
    }
  }

  console.log(result);

}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000

