const hh = require("hyperscript-helpers");
const { h } = require("virtual-dom");

const { div, button, input } = hh(h);

function view(dispatch, model) {
  const btnStyle = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
  return div({ className: "flex flex-col gap-4 items-center" }, [
    div({ className: "text-3xl" }, `Count: ${model}`),
    div({ className: "flex gap-4" }, [
      button({ className: btnStyle, onclick: () => dispatch("ADD") }, "➕ Increase"),
      button({ className: btnStyle, onclick: () => dispatch("SUBTRACT") }, "➖ Decrease"),
    ]),
    div({ className: "font-semibold" }, "Manually set the count:"),
    div({ className: "flex gap-4" }, [
      input({ className: "border-2 border-gray-400 p-2", value: model, oninput: (e) => dispatch("MANUAL", e.target.value) }),
    ]),
  ]);
}

module.exports = { view };