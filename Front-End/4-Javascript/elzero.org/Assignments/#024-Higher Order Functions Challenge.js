let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z"

let ola = myString.split("").filter(function(ele, index, Array){
  return isNaN(ele) && ele !== "," && !ele.includes(Array[Array.length - true]) ;  
  }).map(function(ele){
return ele ==="_"?" " :ele;
  }).reduce(function(acc,current){
return acc === current ? acc : acc+current;
  });
  
  console.log(ola);
// Elzero Web School
