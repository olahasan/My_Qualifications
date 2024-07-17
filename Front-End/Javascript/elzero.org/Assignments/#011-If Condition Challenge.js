====>>>> https://codepen.io/olahasan/pen/RwMdNJQ?editors=1010
====>>>>­­ https://elzero.org/javascript-2021-if-condition-challenge/


first question

let a =10;

if(a>10){
    console.log(10);
}else if (a>=10 && a<=40){
    console.log("10 to 40");
}else if (a>40){
    console.log("> 40");
}else{
    console.log("unknown");
}
//////////////////////////////////////  // Write Previous Condition With Ternary If Syntax

a>10 ? console.log(10) : 
a>=10 && a<=40 ? console.log("10 to 40") : 
a>40 ? console.log("> 40") : 
console.log("unknown");
////////////////////////////////////////////////////////////////////////////////
second question

// 1
let st = "Elzero Web School";

console.log(st.length);//17
console.log((st.length)*2);//34 number
console.log(((st.length)*2).toString()); //34 string

if((((st.length)*2).toString()) === "34"){
    console.log("Good");
}

// 2
let st = "Elzero Web School";

console.log(st.indexOf("W"));// بيطلعلي مكان حرف ال W وهو اللي بيعد فلو عدد الكلمات في المتغير زادت أوقلت مش هيفرق معايا
console.log(st.charAt(st.indexOf("W")));// يحدد الحرف إللى الإندكس أوف فوق حددلي مكانه
console.log(st.charAt(st.indexOf("W")).toLowerCase());// يحول الحرف من كبير لصغير

 if ((st.charAt(st.indexOf("W")).toLowerCase()) === "w") {
    console.log("Good");
  }

// 3
let st = "Elzero Web School";

console.log(st.includes("3"));
console.log((st.includes("3").toString()));

if (((st.includes("3").toString())) !== "string") {
    console.log("Good");
  }

// 4
let st = "Elzero Web School";

console.log(st.length);//17
console.log(typeof(st.length));// نوع ال17 هو رقم و string

if ((typeof(st.length)) === "number") {
    console.log("Good");
  }

// 5
let st = "Elzero Web School";

console.log(st.slice(0, 6).repeat(2));
// 5
if ((st.slice(0, 6).repeat(2)) === "ElzeroElzero") {
    console.log("Good");
  }

// تجميعه أكواد السؤال الثاني (الكود النهائي)
let st = "Elzero Web School";
//1
if((((st.length)*2).toString()) === "34"){
    console.log("Good");
}

//2
 if ((st.charAt(st.indexOf("W")).toLowerCase()) === "w") {
    console.log("Good");
  }

//3
if (((st.includes("3").toString())) !== "string") {
    console.log("Good");
  }

//4
if ((typeof(st.length)) === "number") {
    console.log("Good");
  }

//5
if ((st.slice(0, 6).repeat(2)) === "ElzeroElzero") {
    console.log("Good");
  }

