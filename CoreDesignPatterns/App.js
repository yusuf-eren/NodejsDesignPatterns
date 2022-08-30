const x = require('./CashRegister');
const x0 = require('./CashRegister');

x.credit(25);
x.credit(35);

x0.credit(20);
console.log(`Total amount in x 0 : ${x0.total()}`);

x.debit(5);
console.log(`Total amount in x : ${x.total()}`);