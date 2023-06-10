import reverse from "./reverse.js";

test('Reverses "Hello" into "olleH"', () => {
  expect(reverse("Hello")).toBe("olleH");
});
test('Reverses "sUpErMaN" into "NaMrEpUs"', () => {
  expect(reverse("sUpErMaN")).toBe("NaMrEpUs");
});
