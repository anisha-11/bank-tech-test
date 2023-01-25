const Bank = require('./bank')

it('returns inital empty statement', () => {
  const bank = new Bank()
  const logSpy = jest.spyOn(global.console, 'log')
  bank.printStatement()
  expect(logSpy).toHaveBeenCalledWith('date || credit || debit || balance')
  logSpy.mockRestore()
})

it('tracks 1st transaction of 1000 on 10/1/23', () => {
  const bank = new Bank()
  const logSpy = jest.spyOn(global.console, 'log')
  bank.add('credit', 1000, '10/1/23')
  bank.printStatement()

  expect(logSpy).toHaveBeenCalledWith('date || credit || debit || balance\n10/1/23 || 1000 || || 1000')
  logSpy.mockRestore()
})

it('tracks 2nd transaction of 2000 on 13/1/23 and updates balance', () => {
  const bank = new Bank()
  const logSpy = jest.spyOn(global.console, 'log')
  bank.add('credit', 1000, '10/1/23')
  bank.add('credit', 2000, '13/1/23')
  bank.printStatement()
  expect(logSpy).toHaveBeenCalledWith('date || credit || debit || balance\n10/1/23 || 1000 || || 1000\n13/1/23 || 2000 || || 3000')
})

it('tracks 3rd transaction of 500 on 14/1/23 and updates balance', () => {
  const bank = new Bank()
  const logSpy = jest.spyOn(global.console, 'log')
  bank.add('credit', 1000, '10/1/23')
  bank.add('credit', 2000, '13/1/23')
  bank.add('debit', 500, '14/1/23')
  bank.printStatement()
  expect(logSpy).toHaveBeenCalledWith('date || credit || debit || balance\n10/1/23 || 1000 || || 1000\n13/1/23 || 2000 || || 3000\n14/1/23 || 500 || || 2500')
})
