const obj = { yourSignature: ""};

function signYourName(obj) {
  // Prevent new properties from being added (prevent Extensions) to the object
  Object.preventExtensions(obj);

  // Change the value of the existing property
  obj.yourSignature = "Whatever";
  return obj;
}
console.log(signYourName(obj));
