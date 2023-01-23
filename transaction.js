class Transaction {
  constructor(date, amount, title) {
    this.date = date;
    this.amount = amount;
    this.title = title;
  }

  transaction() {
    if (this.title === "credit") {
      return +this.amount;
    } else {
      return -this.amount;
    }
  }
};

module.exports = Transaction;