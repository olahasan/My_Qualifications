https://codepen.io/olahasan/pen/LYdqMdy
https://elzero.org/javascript-bootcamp-assignments-lesson-from-001-to-009/


// first question
/*
-The first code will not work because there is no elemet with id to get it 
And javascript code wrote before the code so javascript will override the code 
-The second code will not work because there is no elemet with id to get it
And javascript code wrote before the code so javascript will override the code 
-The third code will work because javascript code  has written after the code
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//second question

document.write("<h1>Elzero</h1>");
document.querySelector("h1") .style .color="blue";
document.querySelector("h1") .style .fontSize="80px";
document.querySelector("h1") .style .fontWeight="bold";
document.querySelector("h1") .style .textAlign="center";
document.querySelector("h1") .style .fontFamily="arial";
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//third question

console.log("%cElzero %cWeb %cSchool", "color:red; font-size:40px", "color:green; font-size:40px; font-weight:bold;", "color:white; font-size:40px; background-color:blue;");
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//fourth question

console.group("Group 1");
  console.log("Massage one");
  console.log("Massage two");
    console.group("Child Group");
      console.log("Massage one");
      console.log("Massage two");
        console.group("Grand Child Group");
          console.log("Massage one");
          console.log("Massage two");
        console.groupEnd();
    console.groupEnd();
console.groupEnd();
console.group("Group 2");
  console.log("Massage one");
  console.log("Massage two");
console.groupEnd();


//////////////////////////////////////////////////////////////////////////////////////////////////////////
//fifth question
console.table(["Elzero", "Ahmed", "Sameh", "Gamal", "Aya"]);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//sixth question
//console.log("Iam In Console");
//document.write("Iam In Page");

/*
console.log("Iam In Console");
document.write("Iam In Page");
*/
