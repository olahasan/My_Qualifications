https://codepen.io/olahasan/pen/NWYoowG
https://elzero.org/javascript-2021-operators-challenges/

first Challenge 

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
[++a]=>pre increment
[+]=>plus
[+b++]=>unary operator - post increment
[+]=>plus
[+c++]=>unary operator - post increment
[-]=>minus
[+a++]=>unary operator - post increment

console.log(++a + -b + +c++ - -a++ + +a);
[++a]=>pre increment
[+]=>plus
[-b]=>unary operator "unary nevegation"
[+]=>plus
[+c++]=>unary operator - post increment
[-]=>minus
[-a++]=>unary operator "unary nevegation" - post increment
[+]=>plus
[+a]=>unary operator

console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
[--c]=>pre decrement
[+]=>plus
[+b]=>unary operator "unary plus"
[+]=>plus
[--a]=>pre decrement
[*]=>multiplication
[+b++]=>unary operator - post increment
[-]=>minus
[+b]=>unary operator
[*]=>multiplication
[a]=> number
[+]=>plus
[--a]=>pre decrement
[-]=>minus
[+true]=>unary operator

////////////////////////////////////////////////////////////////////////////////////////
second Challenge

console.log(-d * +e); // 2000
