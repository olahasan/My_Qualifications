https://codepen.io/olahasan/pen/LYdqqmJ
https://elzero.org/javascript-2021-number-challenge/

// chalanges:

let a = 1_00;    //100
let b = 2_00.5; //200.5
let c = 1e2;   //100
let d = 2.4;  //2.4

// 1
console.log((Math.min(a, b, c, d))); //2.4
console.log( Math.round((Math.min(a, b, c, d)))); //2

// 2
console.log(100 **2); //10000
console.log(a ** (Math.round(d)));  //10000
console.log(Math.pow(100,Math.trunc(2,4)));  //10000

// 3
console.log(Math.round(d));  //2
console.log(Math.trunc(d));  //2
console.log(Math.floor(d));  //2
console.log(Math.ceil(d) - +true);  //2
console.log(+(d.toFixed(0)));  //2

// 4
console.log(200 /3);  //66.67
console.log(Math.trunc(b));  //200
console.log(Math.ceil(d));  //3
console.log(((Math.trunc(b)) / (Math.ceil(d))));  //66.67
console.log(((Math.trunc(b)) / (Math.ceil(d))).toFixed(2));  //66.67 string
console.log(+((Math.trunc(b)) / (Math.ceil(d))).toFixed(2)); //66.67 number

console.log(Math.round(+((Math.trunc(b)) / (Math.ceil(d))).toFixed(2)));  //67
