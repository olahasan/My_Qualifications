function removeLeadingTrailing(n) {
    // Convert the string to a number and back to a string
    const cleanedNumber = Number(n).toString();

    // Remove trailing zeros after the decimal point
    const trimmedDecimal = cleanedNumber.replace(/(\.\d*?)0+$/, '$1');

    // Remove leading zeros before the whole number
    const trimmedWhole = trimmedDecimal.replace(/^0+/, '');

    // If the result is an empty string, return "0"
    return trimmedWhole || '0';
}

// Example usage:
console.log(removeLeadingTrailing("230.000")); // Output: "230"
console.log(removeLeadingTrailing("00402")); // Output: "402"
console.log(removeLeadingTrailing("03.1400")); // Output: "3.14"
console.log(removeLeadingTrailing("30")); // Output: "30"
console.log(removeLeadingTrailing("0.0")); // Output: "0"
