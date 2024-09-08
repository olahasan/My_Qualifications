function timeForMilkAndCookies(date) {
  // Check if the input is a valid Date object
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return false;
  }
  return date.getMonth() === 11 && date.getDate() === 24;
}
