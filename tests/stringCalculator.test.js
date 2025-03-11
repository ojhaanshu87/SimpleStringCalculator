const calculator = require("../src/stringCalculator");

test("returns 0 for empty string", () => {
    expect(calculator.add("")).toBe(0); // validation for no input value
});

test("returns number itself for single input", () => {
    expect(calculator.add("9")).toBe(9); // Validation for single inputs
});

test("adds two numbers", () => {
    expect(calculator.add("5, 10")).toBe(15); //validation of two input values
});

test("adds multiple numbers", () => {
    expect(calculator.add("1,2,3,4")).toBe(10); // validation for multiple inputs
});

test("handles newlines as delimiter", () => {
    expect(calculator.add("1\n2,3")).toBe(6); // validation for next line input 
});

test("supports custom delimiters", () => {
    expect(calculator.add("//;\n1;2;3")).toBe(6); // validation for extra delimiters
});

test("throws error on negative numbers", () => {
    expect(() => calculator.add("1,-2,3,-4")).toThrow("negative numbers not allowed -2,-4"); // validation for negative inputs 
});

test("ignores numbers greater than 1000", () => {
    expect(calculator.add("2,1001")).toBe(2);
});

test("supports multi-character delimiters", () => {
    expect(calculator.add("//[***]\n1***2***3")).toBe(6);
});

test("supports multiple custom delimiters", () => {
    expect(calculator.add("//[*][%]\n1*2%3")).toBe(6);
});