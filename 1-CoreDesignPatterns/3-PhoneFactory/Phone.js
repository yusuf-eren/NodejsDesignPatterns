class Phone {
  constructor(
    serialNum,
    model,
    processor,
    RAM,
    width,
    height,
    depth,
    resolution
  ) {
    this.serialNum = serialNum;
    this.configuration = {
      model,
      processor,
      RAM,
      width,
      height,
      depth,
      resolution,
    };
  }
  dial(num) {
    console.log(`Now dialing ${num}...`);
  }
  displayConfig() {
    console.log(this.configuration);
  }
}

module.exports = Phone;
