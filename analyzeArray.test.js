import analyzeArray from "./analyzeArray";

test("Testing 1 to 5", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toStrictEqual({
    avg: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});
test("Testing even numbers", () => {
  expect(analyzeArray([2, 4, 6, 8, 10])).toStrictEqual({
    avg: 6,
    min: 2,
    max: 10,
    length: 5,
  });
});
test("Testing odd numbers", () => {
  expect(analyzeArray([1, 3, 5, 7, 9])).toStrictEqual({
    avg: 5,
    min: 1,
    max: 9,
    length: 5,
  });
});
test("Testing negatives and random numbers", () => {
  expect(analyzeArray([-50, -30, 9, 21, 50001, 96, 22, -32])).toStrictEqual({
    avg: 6254.625,
    min: -50,
    max: 50001,
    length: 8,
  });
});
