const Macbook = require("./Laptop");

class MacBookAIR {
  constructor(serialNum) {
    return new Macbook(serialNum, "MacBook AIR", "M2", "8 GB", 7);
  }
}

module.exports = MacBookAIR;
