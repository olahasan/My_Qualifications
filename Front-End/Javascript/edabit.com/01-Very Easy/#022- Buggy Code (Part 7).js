function swap(a, b) {
  return [b, a];
}

let a = 100;
let b = 200;
[a, b] = swap(a, b); // using destructuring 

console.log(a, b); // Output: 200 100
//////////////////////////////////////////////////
//or
function swap(a, b) {
  let arr = [];
  let temp = a;
  a = b;
  b = temp;

  arr.push(a);
  arr.push(b);

  return arr;
}
