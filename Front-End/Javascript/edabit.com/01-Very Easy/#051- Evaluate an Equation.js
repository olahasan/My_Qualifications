function eq(expression) {
    try {
        const result = eval(expression);
        return result;
    } catch (error) {
        console.error("Error evaluating expression:", error.message);
        return null; // Return null in case of an error
      // return error.message;
    }
}

// Examples
console.log(eq("1+2")); // ➞ 3
console.log(eq("6/(9-7)")); // ➞ 3
console.log(eq("3+2-4")); // ➞ 1
