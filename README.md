# bank-tech-test

## Install
1. Clone this repository by running the below in your terminal:
```bash
git clone https://github.com/anisha-11/bank-tech-test.git
```

2. Go into the relevant directory by doing the below which will install dependencies needed to run it accurately:
```bash
cd bank-tech-test
npm install
```

## Testing
You can run the tests by typing the below in the terminal:
```bash
jest
```

You can run the tests to show coverage by doing the below:
```bash
jest --coverage
```

## Node
You can run it in node by doing the following steps:

<img width="281" alt="Screenshot 2023-01-24 at 22 50 56" src="https://user-images.githubusercontent.com/70213220/214441711-b0f834e8-a6ec-41de-b302-d468df86dfdd.png">

## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or Node.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```
# Approach 

Firstly, I tried to get a good understanding of what was required for me to code. Therefore, I took some time to write down any key things that would help me break things down but also allow to me to get a good visual of what would be required from me. Following the specification, I had started to make my first block of code. My initial thought was to split it up into many different classes, however, while I was coding through that, I started to lose a bit of understanding. As a result, I decided to take things step-by-step and do it all in one or two classes in order to potentially split things down at a further stage if needed upon review. 

After getting a better idea of the code, I created a Bank class to essentially deal with everything that was going on which went from what actually happens mathematically when you make a deposit/withdrawal and how it gets printed, to a Transaction class that tried to deal with everything transaction based. As I went along, it seems like that class may be slightly useless as I had just pretty much done unit testing for it and it didn't really play a huge factor in my Bank class. 

I then did the relevant testing for the classes, came across a few errors with the inital returning. From that, I changed the return to 'console.log' and then proceeded to google how to TDD for console.log. That was quite a new thing for me to do, but seemed fairly doable. In a nutshell, that is how I crafted the code.

# Code Structure 

My code is essentially all in one file (bank.js) - as that is what helped my understanding at the beginning. That adds the transactions of credits/debits made and also has the ability to print the statement using a simple console.log.

There is a seperate file for transaction.js which is almost a way to unit test how the system will be able to tell the difference between a deposit and a withdrawal and if it can pick it up or not. It seems like this doesn't play much into the bank.js file.