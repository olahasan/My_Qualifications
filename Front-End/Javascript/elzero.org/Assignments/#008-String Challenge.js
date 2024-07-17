====>>>>https://codepen.io/olahasan/pen/poLGGQP
====>>>>https://elzero.org/javascript-2021-string-challenge/


let a = "Elzero Web School"

1
console.log(a.charAt(2).toUpperCase()); //Z
console.log(a.slice(2,6)); //zero
console.log(`${a.charAt(2).toUpperCase()}${a.slice(3,6)}`); //Zero

2
console.log(a.charAt(13).toUpperCase().repeat(8)); //HHHHHHHH 8H

3
console.log(a.split(" ",1)); //[Elzero]

4
console.log(a.substr(0, 6)); //Elzero School
console.log(a.substr(11,17)); //Elzero School
console.log(`${a.substr(0, 6)} ${a.substr(11,17)}`); //Elzero School
console.log(`${a.substr(0, 6)} ${a.substr(-6)}`); //Elzero School

5
console.log(a.charAt(0).toLowerCase()); //eLZERO WEB SCHOOl
console.log(a.charAt(a.length-1).toLowerCase()); //eLZERO WEB SCHOOl
console.log(a.slice(1, a.length-1).toUpperCase()); //eLZERO WEB SCHOOl
console.log(`${a.charAt(0).toLowerCase()}${a.slice(1, a.length-1).toUpperCase()}${a.charAt(a.length-1).toLowerCase()}`); //eLZERO WEB SCHOOl


