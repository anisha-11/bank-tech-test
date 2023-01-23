const Bank = require("./bank");

it("returns inital empty statement", () => {
  const bank = new Bank();
  expect(bank.statement()).toBe("date || credit || debit || balance");
});

it("tracks 1st transaction of 1000 on 10/1/23", () => {
  const bank = new Bank();
  const deposit = new Transaction("credit", 1000, "10/1/23");
  bank.add(deposit);
  expect(bank.statement().toBe("date || credit || debit || balance\n10/1/23 || 1000.00 || || 1000.00"));
});