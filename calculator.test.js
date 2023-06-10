import Calculator from "./calculator";

test("Calculator should do 5 + 27 and return 32", () => {
  let calc = new Calculator();
  expect(calc.add(5, 27)).toBe(32);
});
test("Calculator should do 42 - 21 and return 21", () => {
  let calc = new Calculator();
  expect(calc.subtract(42, 21)).toBe(21);
});
test("Calculator should do 5 * 9 and return 45", () => {
  let calc = new Calculator();
  expect(calc.multiply(5, 9)).toBe(45);
});
test("Calculator should do 63 / 7 and return 9", () => {
  let calc = new Calculator();
  expect(calc.divide(63, 7)).toBe(9);
});
