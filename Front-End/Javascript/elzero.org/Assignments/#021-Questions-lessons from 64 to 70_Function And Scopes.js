====>>>> https://codepen.io/olahasan/pen/dymreBV?editors=1010
====>>>>­­ https://elzero.org/javascript-bootcamp-assignments-lesson-from-064-to-070/


// first Question 
// second Question

// function itsMe() {
//   return `Iam A Normal Function`;
// }

// console.log(itsMe()); // Iam A Normal Function

let  itsMe = _ =>`Iam A Normal Function`;
console.log(itsMe()); // Iam A Normal Function



// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }

// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

 let urlCreate = (protocol, web, tld) =>
  `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

///////////////////////////////////////////////////////////////////////////////////////////////

// third Question
/*
let checker = (zName) => {
  return status =>{
    return salary => {
      return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
    };
  };
}

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Available
*/
/*
//other solution
 let checker = zName=>{
  return  status =>{
    return  salary=> {
      return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
    };
  };
}

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
*/

// other solution
let checker=(zName) =>(status)=> (salary)=> status === "Available"?`${zName}, My Salary Is ${salary}`:`Iam Not Avaialble`;

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble


///////////////////////////////////////////////////////////////////////////////////////////////

// fourth Question

function specialMix(...data) {
  let counter = 0;
  let string_count = 0;

  for (let i = 0; i < data.length; i++) {

    if (parseInt(data[i])) {
      counter += parseInt(data[i])
    } else {
      string_count++;
    }
  }

  if (counter == 0 && string_count == data.length) {
    counter = "all is string"
  }
  return counter;

}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
