function fixImport(incorrectStatement) {
   //Split the statement into words
  const words = incorrectStatement.split(" ");
   //Rearrange the words to the correct order
  const fixedStatement = `from ${words[3]} import ${words[1]}`;
  return fixedStatement;

}
console.log(fixImport("import object from module_name")); // Output: "from module_name import object"
console.log(fixImport("import randint from random")); // Output: "from random import randint"
console.log(fixImport("import pi from math")); // Output: "from math import pi"
