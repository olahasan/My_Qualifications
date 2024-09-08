function doubleChar(str) {
  let full = str.split("").map(function (ele) {
      return ele + ele;
    }).join("");
  return full;
}

console.log(doubleChar("String")); //"SSttrriinngg"
console.log(doubleChar("Hello World!")); //"HHeelllloo  WWoorrlldd!!"
console.log(doubleChar("1234!_ ")); // "11223344!!__  "
