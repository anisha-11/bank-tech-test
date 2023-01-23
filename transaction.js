class Transaction {
  constructor(date, amount, title) {
    this.date = date;
    this.amount = amount;
    this.title = title;
  }

  value() {
    if (this.type === "credit") {
      return +this.amount;
    } else {
      return -this.amount;
    }
  }
};

module.exports = Transaction;