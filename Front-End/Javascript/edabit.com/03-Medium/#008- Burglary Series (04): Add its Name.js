function addName(obj, name, value) {
  return { ...obj, [name]: value };
}

console.log(addName({}, "Brutus", 300)); // ➞ { Brutus: 300 }
console.log(addName({ piano: 500 }, "Brutus", 400)); //➞ { piano: 500, Brutus: 400 }
console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440)); // ➞ { piano: 500, stereo: 300, Caligula: 440 }
