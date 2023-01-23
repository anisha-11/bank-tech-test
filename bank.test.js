const Bank = require("./bank");

it("returns inital empty statement", () => {
  const bank = new Bank();
  expect(bank.statement()).toBe("date || credit || debit || balance");
});