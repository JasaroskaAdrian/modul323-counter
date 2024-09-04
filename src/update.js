const MSGS = {
    ADD: "ADD",
    SUBTRACT: "SUBTRACT",
    MANUAL: "MANUAL",
  };
  
  function update(msg, model, value) {
    switch (msg) {
      case MSGS.ADD:
        return model + 1;
      case MSGS.SUBTRACT:
        return model - 1;
      case MSGS.MANUAL:
        if (isNaN(value)) {
          return model;
        }
        return parseInt(value);
      default:
        return model;
    }
  }
  
  module.exports = { update, MSGS };