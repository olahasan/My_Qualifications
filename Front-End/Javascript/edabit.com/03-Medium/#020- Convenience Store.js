function changeEnough(change, amountDue) {
  
  const coinValuesIndex = [0.25, 0.1, 0.05, 0.01];

  let allChange = change.reduce(function (Acc, Current, index) {
    return Acc + Current * coinValuesIndex[index];
  }, 0);

  return allChange >= amountDue;
}

/*
//Notes
- quarter: 25 cents / $0.25
- dime: 10 cents / $0.10
- nickel: 5 cents / $0.05
- penny: 1 cent / $0.01
*/


console.log(changeEnough([2, 100, 0, 0], 14.11)); //➞ false
console.log(changeEnough([0, 0, 20, 5], 0.75)); //➞ true
console.log(changeEnough([30, 40, 20, 5], 12.55)); //➞ true
console.log(changeEnough([10, 0, 0, 50], 3.85)); //➞ false
console.log(changeEnough([1, 0, 5, 219], 19.99)); //➞ false
