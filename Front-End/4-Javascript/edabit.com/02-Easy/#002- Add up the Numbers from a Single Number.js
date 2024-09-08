function addUp(num) {
  if (num === 1) {
    return 1;
  } else {
    return num + addUp(num - 1);
  }
}
