const Macbook = require("./Laptop");

class MacBookAIR {
  constructor(serialNum) {
    return new Macbook(serialNum, "MacBook AIR", "M2", "8 GB", 13.3);
  }
}

module.exports = MacBookAIR;
