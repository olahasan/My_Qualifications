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

//////////////////////////////////////////////////////////////////////////////
//other way
function generation(x, y) {
  const generations = {
    "-3": { m: "great grandfather", f: "great grandmother" },
    "-2": { m: "grandfather", f: "grandmother" },
    "-1": { m: "father", f: "mother" },
    0: "me!",
    1: { m: "son", f: "daughter" },
    2: { m: "grandson", f: "granddaughter" },
    3: { m: "great grandson", f: "great granddaughter" },
  };

  if (x in generations) {
    return y === "m" ? generations[x].m : generations[x].f;
  } else {
    return "Invalid input";
  }
}

console.log(generation(2, "f")); // ➞ "granddaughter"
console.log(generation(-3, "m")); // ➞ "great grandfather"
console.log(generation(1, "f")); // ➞ "daughter"
console.log(generation(0, "m")); // ➞ "me!"
