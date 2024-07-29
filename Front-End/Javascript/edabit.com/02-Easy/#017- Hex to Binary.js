function toBinary(hex) {
  // Convert the hex number to a binary string
  /*The toString() method is used to convert the decimal number to a binary string. 
    The argument 2 specifies that the output should be in base 2 (binary).
  */
  /*The padStart() method is used to ensure that the binary string always has 8 characters. 
    If the binary string is less than 8 characters, it will be padded with leading zeros.
  */
  const binary = +hex.toString(2).padStart(8, "0");

  return binary;
}
