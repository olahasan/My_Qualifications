function detectWord(str) {
  let word = str.split("");
  return word.filter(function (ele) {
      if (ele === ele.toUpperCase()) {
        return "";
      } else {
        return ele;
      }
    }).join("");
}
