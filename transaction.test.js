const Transaction = require("./transaction");

it("makes a deposit of 1000 on date 10-01-2023", () => {
  const deposit = new Transaction("10-01-2023", 1000, "credit");
  expect(deposit.date).toBe("10-01-2023");
  expect(deposit.amount).toBe(1000);
  expect(deposit.title).toBe("credit");
});

it("makes a deposit of 2000 on date 13-01-2023", () => {
  const deposit = new Transaction("13-01-2023", 2000, "credit");
  expect(deposit.date).toBe("13-01-2023");
  expect(deposit.amount).toBe(2000);
  expect(deposit.title).toBe("credit");
});

it("makes a withdrawal of 500 on date 14-01-2023", () => {
  const deposit = new Transaction("14-01-2023", 500, "debit");
  expect(deposit.date).toBe("14-01-2023");
  expect(deposit.amount).toBe(500);
  expect(deposit.title).toBe("debit");
});

