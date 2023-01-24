const Bank = require("./bank");
const Transaction = require("./transaction");

xit("returns inital empty statement", () => {
  const bank = new Bank();
  expect(bank.statement()).toBe("date || credit || debit || balance");
});

it("tracks 1st transaction of 1000 on 10/1/23", () => {
  const bank = new Bank();
  // const transaction = new Transaction("credit", 1000, "10/1/23");
  bank.add("credit", 1000, "10/1/23");
  expect(bank.statement()).toBe("date || credit || debit || balance\n10/1/23 || 1000 || || 1000");
});

it("tracks 2nd transaction of 2000 on 13/1/23 and updates balance", () => {
  const bank = new Bank();
  // const transaction = new Transaction("credit", 2000, "13/1/23");
  bank.add("credit", 1000, "10/1/23");
  bank.add("credit", 2000, "13/1/23");
  expect(bank.statement()).toBe("date || credit || debit || balance\n10/1/23 || 1000 || || 1000\n13/1/23 || 2000 || || 3000");
})

// it("tracks 3rd transaction of 2000 on 13/1/23 and updates balance", () => {
//   const bank = new Bank();
//   // const transaction = new Transaction("credit", 2000, "13/1/23");
//   bank.add("credit", 1000, "10/1/23");
//   bank.add("credit", 2000, "13/1/23");
//   expect(bank.statement()).toBe("date || credit || debit || balance\n10/1/23 || 1000 || || 1000\n13/1/23 || 2000 || || 3000");
// })

