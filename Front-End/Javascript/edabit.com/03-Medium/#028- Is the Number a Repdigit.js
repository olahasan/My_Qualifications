function isRepdigit(num) {
  if (num === 0) {
    return true;
  } else if (num < 0) {
    return false;
  } else {
    return num
      .toString()
      .split("")
      .every((ele) => {
        return ele === ele[0];
      });
  }
}
console.log(isRepdigit(66)); //➞ true
console.log(isRepdigit(0)); //➞ true
console.log(isRepdigit(-11)); //➞ false
