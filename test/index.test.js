// This file will contain tests for the program. The purpose of these tests is to
// ensure that the core program logic works as expected.

// This project uses a testing library called Jest. You can learn more about Jest
// here: https://jestjs.io/.

// Test files can contain multiple tests, so long as those tests are grouped logically.
// Included below is a function and a test that makes assertions about the behaviour
// of the function. In most cases the subject of a test will be defined in a separate
// file. In this case we've defined the function and the corresponding test in the
// same file for illustrative and learning purposes.

const { isAmountInvalid } = require ('../src/validator-functions'); 
const { isInitialCurrencyInvalid } = require ('../src/validator-functions'); 
const { isTargetCurrencyInvalid } = require ('../src/validator-functions'); 

// Tests for isAmountInvalid function
describe('isAmountInvalid()', () => {
  test('should return True when the amount is undefined:', () => {
    let amount;
    const result = isAmountInvalid(amount);
    expect(result).toBe(true);
  });

  test('should return True when the amount is 0:', () => {
    const result = isAmountInvalid(0);
    expect(result).toBe(true);
  });

  test('should return True when the amount is less than 0:', () => {
    const result = isAmountInvalid(-1);
    expect(result).toBe(true);
  });

  test('should return True when the amount is letter character:', () => {
    const result = isAmountInvalid('sss');
    expect(result).toBe(true);
  });

  test('should return True when the amount is special character:', () => {
    const result = isAmountInvalid('%');
    expect(result).toBe(true);
  });

  test('should return False when the amount is a NUMBER more than 0:', () => {
    const result = isAmountInvalid(12);
    expect(result).toBe(false);
  });
});
// Tests for isInitialCurrencyInvalid function
describe('isInitialCurrencyInvalid()', () => {
  
  test('should return True when the InitialCurrency is undefined:', () => {
    let initialCurrency;
    const result = isInitialCurrencyInvalid(initialCurrency);
    expect(result).toBe(true);
  });

  test('should return True when the InitialCurrency is not letter character:', () => {
    const result = isInitialCurrencyInvalid('&&');
    expect(result).toBe(true);
  });

  test('should return False when the InitialCurrency is letter character:', () => {
    const result = isInitialCurrencyInvalid('YEN');
    expect(result).toBe(false);
  });
});

// Tests for isTargetCurrencyInvalid function
describe('isTargetCurrencyInvalid()', () => {
  
  test('should return True when the TargetCurrency is undefined:', () => {
    let TargetCurrency;
    const result = isTargetCurrencyInvalid(TargetCurrency);
    expect(result).toBe(true);
  });

  test('should return True when the TargetCurrency is not letter character:', () => {
    const result = isTargetCurrencyInvalid('&&');
    expect(result).toBe(true);
  });

  test('should return False when the TargetCurrency is letter character:', () => {
    const result = isTargetCurrencyInvalid('YEN');
    expect(result).toBe(false);
  });

});
