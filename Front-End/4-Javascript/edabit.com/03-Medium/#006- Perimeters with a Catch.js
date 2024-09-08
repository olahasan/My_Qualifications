function perimeter(l, num) {
  return l === "s" ? 4 * num : 6.28 * num;
}

console.log(perimeter("s", 7)); // ➞ 28
console.log(perimeter("c", 4)); // ➞ 25.12
console.log(perimeter("c", 9)); // ➞ 56.52
