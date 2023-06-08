import capitalize from "./capitalize.js";

test("Capitalizes the word: doggy into Doggy", () => {
  expect(capitalize("doggy")).toBe("Doggy");
});
test("Capitalizes the word: jEeP into JEeP", () => {
  expect(capitalize("jEeP")).toBe("JEeP");
});
