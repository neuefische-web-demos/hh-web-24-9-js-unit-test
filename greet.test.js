import { greet } from "./greet.js";

test("returns 'Hello Hauke!' if called greet('Hauke')", () => {
  const result = greet("Hauke");
  expect(result).toBe("Hello Hauke!");
});

//greet() -> Hello Stranger!
test("returns 'Hello Stranger!' if called greet()", () => {
  const result = greet();
  expect(result).toBe("Hello Stranger!");
});

//greet("Roland") -> Hello Coach!
test("returns 'Hello Coach!' if called greet('Roland')", () => {
  const result = greet("Roland");
  expect(result).toBe("Hello Coach!");
});
