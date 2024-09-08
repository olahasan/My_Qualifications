https://codepen.io/olahasan/pen/bGvzzvV
https://elzero.org/javascript-bootcamp-assignments-lesson-from-023-to-026/

first question

console.log(100000); // 100000
console.log(1_00_000); // 100000
console.log(1e5); // 100000
console.log(10 ** 5); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(5e4 + 5e4); // 100000
console.log(3e4 + 7e4); // 100000
console.log(Math.round(100000.4)); // 100000
console.log(Math.trunc(100000.53298)); // 100000
console.log(100 * 1000); // 100000
console.log(Math.ceil(99999.9)); // 100000
console.log(Math.floor(100000.9)); // 100000
console.log(Math.max(100000, 20, 100)); // 100000
console.log(200000/2); // 100000
/////////////////////////////////////////////////////////////////////////////
second question

console.log(-Number.MIN_SAFE_INTEGER);
/////////////////////////////////////////////////////////////////////////////
third question

console.log(Math.trunc(Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER) );
console.log(Number.MAX_SAFE_INTEGER );
console.log((--Number.MAX_SAFE_INTEGER) );
console.log(Math.ceil((Number.MAX_SAFE_INTEGER / --Number.MAX_SAFE_INTEGER)));
console.log((Math.ceil((Number.MAX_SAFE_INTEGER / --Number.MAX_SAFE_INTEGER))) ** 
            (Math.ceil((Number.MAX_SAFE_INTEGER / --Number.MAX_SAFE_INTEGER))) ** 
            (Math.ceil((Number.MAX_SAFE_INTEGER / --Number.MAX_SAFE_INTEGER))));//16
/////////////////////////////////////////////////////////////////////////////
fourth question

let myVar = "100.56789 Views";

console.log(parseInt("100.56789 Views")); // 100
console.log(parseInt(myVar)); // 100

console.log(parseFloat("100.56789 Views")); // 100
console.log((+(parseFloat("100.56789 Views")).toFixed(2))); // 100.57
console.log((+(parseFloat(myVar)).toFixed(2))); // 100.57
/////////////////////////////////////////////////////////////////////////////
fifth question

let num = 10;
console.log((Number.isInteger(10))); // true
console.log(+(Number.isInteger(10))); // 1
console.log(+(Number.isInteger(10)) + (+(Number.isInteger(10)))); // 2
console.log(+(Number.isInteger(num)) + (+(Number.isInteger(num)))); // 2

/////////////////////////////////////////////////////////////////////////////
sixth question
let flt = 10.4;

console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.ceil(flt) - true); // 10
console.log(+(10.4 .toFixed(0))); // 10


-console.log(+(Number.isInteger(Math.trunc(flt)))); // 1
-console.log((+(Number.isInteger(Math.trunc(flt))) + (+(Number.isInteger(Math.trunc(flt)))))); // 2
console.log((+(Number.isInteger(Math.trunc(flt))) + (+(Number.isInteger(Math.trunc(flt))))) ** (+(Number.isInteger(Math.trunc(flt))) + (+(Number.isInteger(Math.trunc(flt))))) + (+(Number.isInteger(Math.trunc(flt))) + (+(Number.isInteger(Math.trunc(flt))))) + (+(Number.isInteger(Math.trunc(flt))) + (+(Number.isInteger(Math.trunc(flt))))) + (+(Number.isInteger(Math.trunc(flt))) + (+(Number.isInteger(Math.trunc(flt)))))); // 10

/////////////////////////////////////////////////////////////////////////////
seventh question

console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4

