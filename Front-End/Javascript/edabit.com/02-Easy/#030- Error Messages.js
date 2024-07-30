/*
Notes
Do this without using the switch or if statements.
*/

function error(code) {
  const errorMessages = {
    1: "Check the fan: e1",
    2: "Emergency stop: e2",
    3: "Pump Error: e3",
    4: "c: e4",
    5: "Temperature Sensor Error: e5",
  };

  return errorMessages[code] || 101;
}

console.log(error(1)); // Output: "Check the fan: e1"
console.log(error(2)); // Output: "Emergency stop: e2"
console.log(error(3)); // Output: "Pump Error: e3"
console.log(error(6)); // Output: 101 (for any other value)
console.log(error(5)); // Output: "Temperature Sensor Error: e5"
