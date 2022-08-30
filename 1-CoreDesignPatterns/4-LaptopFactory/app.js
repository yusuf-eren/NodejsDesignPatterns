const MacbookFactory = require("./MacBookFactory.js");

const MacbookPRO = MacbookFactory.create("Macbook PRO", "pro-01");
const MacbookAIR = MacbookFactory.create("Macbook AIR", "air-01");

MacbookPRO.powerOn();
MacbookAIR.powerOn();

MacbookPRO.displayConfig();
MacbookAIR.displayConfig();