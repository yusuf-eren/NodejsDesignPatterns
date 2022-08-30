class Laptop {
  constructor(serialNum, model, processor, RAM, screen) {
    this.serialNum = serialNum;
    this.configuration = {
      model,
      processor,
      RAM,
      screen,
    };
  }
  powerOn() {
    console.log(`System is waking up... ${this.configuration.model}`);
  }
  displayConfig() {
    console.log(this.configuration);
  }
}

module.exports = Laptop;
