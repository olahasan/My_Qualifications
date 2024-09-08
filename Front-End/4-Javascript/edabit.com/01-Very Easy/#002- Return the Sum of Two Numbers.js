function addition(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Sorry but you didn't pass two numbers.";
    }
    else{
        return a + b;
    }
}
