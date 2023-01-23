const Transaction = require("./transaction");

it("makes a deposit of 1000 on date 10-01-2023", () => {
  const deposit = new Transaction("10-01-2023", 1000, "credit");
  expect(deposit.date).toBe("10-01-2023");
  expect(deposit.amount).toBe(1000);
  expect(deposit.title).toBe("credit");
});