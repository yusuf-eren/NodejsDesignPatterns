const Macbook = require("./Laptop");

class MacBookPRO {
  constructor(serialNum) {
    return new Macbook(serialNum, "MacBook PRO", "M2", 16, 14);
  }
}

module.exports = MacBookPRO