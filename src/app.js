const { createElement } = require("virtual-dom");
const { diff, patch } = require("virtual-dom");
const { update } = require("./update");
const { view } = require("./view");

function app(initModel, update, view, node) {
  let model = initModel;
  let currentView = view(dispatch, model);
  let rootNode = createElement(currentView);
  node.appendChild(rootNode);

  function dispatch(msg, value) {
    model = update(msg, model, value);
    const updatedView = view(dispatch, model);
    const patches = diff(currentView, updatedView);
    rootNode = patch(rootNode, patches);
    currentView = updatedView;
  }
}

module.exports = { app };