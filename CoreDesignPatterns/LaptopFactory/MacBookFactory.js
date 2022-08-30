const MacBookPRO = require("./MacBookPRO.js");
const MacBookAIR = require("./MacBookAIR.js");
const { create } = require("lodash");

class MacbookFactory {
  create(type, serialNum) {
    if (type === "Macbook PRO") {
      return new MacBookPRO(serialNum);
    }
    if (type === "Macbook AIR") {
      return new MacBookAIR(serialNum);
    } else {
      console.log("Unknown MacBook Type...");
    }
  }
}

module.exports = new MacbookFactory();
