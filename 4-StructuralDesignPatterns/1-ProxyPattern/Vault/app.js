const { lock, unlock } = require("./Vault");
const password = "strongPass";

const obj = {
  name: "Yusuf",
  age: 20,
  city: "Istanbul",
  country: "TR",
};

const person = lock(obj, password);
person.favColor = "Red";
person.favFruit = "Apple";
console.log(person);

const unlocked = unlock(person, password);
// unlocked.food = "Pizza";
console.log(unlocked);
