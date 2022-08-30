const Bank = require("./Bank");
const user1 = "Yusuf";

Bank.createAccount(user1);
Bank.credit(user1, 100);
Bank.debit(user1, 25);
console.log(Bank.getFunds(user1));

// We can not access to the accounts.
console.log(Bank._accounts);