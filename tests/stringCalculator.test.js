const calculator = require("../src/stringCalculator");

test("returns 0 for empty string", () => {
    expect(calculator.add("")).toBe(0); // validation for no input value
});

test("returns number itself for single input", () => {
    expect(calculator.add("9")).toBe(9); // Validation for single inputs
});