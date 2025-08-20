describe('Counter', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('should increment the count', () => {
    const { increment } = require('../src/script.js');
    expect(increment()).toBe(1);
    expect(increment()).toBe(2);
  });

  it('should decrement the count', () => {
    const { increment, decrement } = require('../src/script.js');
    increment(); // count = 1
    expect(decrement()).toBe(0);
  });
});