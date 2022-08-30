const Game = require("./Game");
const Player = require("./Player");

const Yusuf = new Player("Yusuf");
const John = new Player("John");
const Poker = new Game();

Poker.join(Yusuf);
Poker.join(John);

Yusuf.wins(20);

John.wins(30);
John.wins(40);
John.wins(40);
John.loses(20);
John.wins(40);

Yusuf.wins(1000);
Yusuf.loses(100);

console.log("Scoreboard: ", Poker.scores());
console.log(
  `Winner: ${Poker.getWinner().name} with ${Poker.getWinner().points} points`
);
