import caesarCipher from "./caesarCipher";

test("Shift abcdefg by 1, resulting in bcdefgh", () => {
  expect(caesarCipher("abcdefg", 1)).toBe("bcdefgh");
});
test("Testing z shift, wyzx into xzay", () => {
  expect(caesarCipher("wyzx", 1)).toBe("xzay");
});
test("Testing z shift by 2, wyzx into yabz", () => {
  expect(caesarCipher("wyzx", 2)).toBe("yabz");
});
test("Testing no shift", () => {
  expect(caesarCipher("abcdefg", 0)).toBe("abcdefg");
});
test("Testing punctuation", () => {
  expect(caesarCipher("abcdef.g", 1)).toBe("bcdefg.h");
});
test("Testing punctuation", () => {
  expect(caesarCipher("abcdef//g", 1)).toBe("bcdefg//h");
});

test("Testing punctuation", () => {
  expect(caesarCipher("abcdef/./?g", 1)).toBe("bcdefg/./?h");
});

test("Testing punctuation", () => {
  expect(caesarCipher("abcdef-_+`g", 1)).toBe("bcdefg-_+`h");
});
