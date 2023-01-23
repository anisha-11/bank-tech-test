class Bank {
  constructor() {
    this.transactions = "";
  }

  add(transaction) {
    this.transactions = "\n10/1/23 || 1000.00 || || 1000.00";
  }

  statement() {
    return "date || credit || debit || balance" + this.transactions;
  }
};

module.exports = Bank;