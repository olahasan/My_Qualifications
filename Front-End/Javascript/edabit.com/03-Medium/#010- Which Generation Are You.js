function generation(x, y) {
  switch (x) {
    case -3:
      switch (y) {
        case "f":
          return "great grandmother";
        case "m":
          return "great grandfather";
      }
    case -2:
      switch (y) {
        case "f":
          return "grandmother";
        case "m":
          return "grandfather";
      }
    case -1:
      switch (y) {
        case "f":
          return "mother";
        case "m":
          return "father";
      }
    case 0:
      return "me!";
    case 1:
      switch (y) {
        case "f":
          return "gaughter";
        case "m":
          return "son";
      }
    case 2:
      switch (y) {
        case "f":
          return "grandgaughter";
        case "m":
          return "grandson";
      }
    case 3:
      switch (y) {
        case "f":
          return "great grandgaughter";
        case "m":
          return "great grandson";
      }
  }
}

console.log(generation(2, "f")); //➞ "granddaughter"
console.log(generation(-3, "m")); //➞ "great grandfather"
console.log(generation(1, "f")); // ➞ "daughter"
