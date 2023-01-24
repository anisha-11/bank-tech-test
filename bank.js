class Bank {
  constructor() {
    this.transactions = "";
    this.balance = 0 
  }

  deposit(amount) {
    this.balance += amount
  }

  withdrawal(amount) {
    this.balance -= amount
  }

  add(method, amount, date) {
    
    if (method === "credit") {
      this.balance += amount
      this.transactions += `\n${date} || ${amount} || || ${this.balance}`;
    } else {
      this.balance -= amount
      this.transactions += `\n${date} || ${amount} || || ${this.balance}`;
    };
  }

  statement() {
    console.log("date || credit || debit || balance" + this.transactions);
  }

  printBalance() {
    return this.balance
  }
};

module.exports = Bank;