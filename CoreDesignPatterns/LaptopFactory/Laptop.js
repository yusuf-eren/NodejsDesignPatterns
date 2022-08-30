class Laptop {
  constructor(serialNum, model, processor, RAM, width, height, depth, screen) {
    this.serialNum = serialNum;
    this.configuration = {
      model,
      processor,
      RAM,
      screen,
    };
  }
  powerOn() {
    console.log(`System is waking up... (${this.model})`);
  }
  displayConfig() {
    console.log(this.configuration);
  }
}

module.exports = Laptop;
