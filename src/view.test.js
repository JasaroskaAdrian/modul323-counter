const { view } = require("./view");
const { MSGS } = require("./update");

test("view output", () => {
  const model = 0;
  const dispatch = jest.fn();
  const vdom = view(dispatch, model);
  expect(vdom).toBeDefined();
});

test("view with different model", () => {
  const model = 5;
  const dispatch = jest.fn();
  const vdom = view(dispatch, model);
  expect(vdom).toBeDefined();
});

test("dispatch ADD message", () => {
  const model = 0;
  const dispatch = jest.fn();
  const vdom = view(dispatch, model);
  const increaseButton = vdom.children[1].children[0];
  increaseButton.properties.onclick();
  expect(dispatch).toHaveBeenCalledWith(MSGS.ADD);
});