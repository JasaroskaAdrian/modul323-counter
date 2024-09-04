const { update, MSGS } = require("./update");

test("ADD", () => {
  const model = 9;
  const result = update(MSGS.ADD, model);
  expect(result).toBe(1);
});

test("SUBTRACT", () => {
  const model = 0;
  const result = update(MSGS.SUBTRACT, model);
  expect(result).toBe(-1);
});

test("MANUAL with number", () => {
  const model = 0;
  const result = update(MSGS.MANUAL, model, "5");
  expect(result).toBe(5);
});

test("MANUAL with non-number", () => {
  const model = 0;
  const result = update(MSGS.MANUAL, model, "abc");
  expect(result).toBe(0);
});

test("Unknown message", () => {
  const model = 0;
  const result = update("UNKNOWN", model);
  expect(result).toBe(0);
});