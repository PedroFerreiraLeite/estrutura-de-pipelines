const { increment, decrement } = require('../src/index.js');

describe('Counter', () => {
  it('should increment the count', () => {
    expect(increment()).toBe(1);
    expect(increment()).toBe(2);
  });

  it('should decrement the count', () => {
    expect(decrement()).toBe(1);
  });
});