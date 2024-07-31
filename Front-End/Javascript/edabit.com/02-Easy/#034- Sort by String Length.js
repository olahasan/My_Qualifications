function sortByLength(arr) {
  return arr.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(["a", "ccc", "dddd", "bb"])); //➞ ["a", "bb", "ccc", "dddd"]
console.log(sortByLength(["apple", "pie", "shortcake"])); //➞ ["pie", "apple", "shortcake"]
console.log(sortByLength(["may", "april", "september", "august"])); // ➞ ["may", "april", "august", "september"]
console.log(sortByLength([])); // []
