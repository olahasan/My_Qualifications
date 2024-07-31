function has_bugs(buggy_code) {
  if (buggy_code) {
    return "sad days";
  } else {
    // return "it's a good day";
    return `it's a good day`;
  }
}

console.log(has_bugs(true)); // ➞ "sad days"
console.log(has_bugs(false)); //➞ "it's a good day"
