# bank-tech-test

## Install:
1. Clone this repository by running the below in your terminal:
```bash
git clone https://github.com/anisha-11/bank-tech-test.git
```

2. Go into the relevant directory by doing the below which will install dependencies needed to run it accurately:
```bash
cd bank-tech-test
npm install
```

## Testing:
You can run the tests by typing the below in the terminal:
```bash
jest
```

You can run the tests to show coverage by doing the below:
```bash
jest --coverage
```

## Node:
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

# Code Structure 