function paths(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * paths(n - 1);
}

console.log(paths(4)); //24
console.log(paths(1)); //1
console.log(paths(9)); //362880
