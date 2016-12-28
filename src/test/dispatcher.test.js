var counter = require('../Dispatcher.js')

describe('actions', () => {
  it('should increment', () => {
    expect(counter(0, {type: 'INCREMENT'})).toEqual(1);
  });
  it('should increment', () => {
    expect(counter(1, {type: 'INCREMENT'})).toEqual(2);
  });
  it('should decrement', () => {
    expect(counter(2, {type: 'DECREMENT'})).toEqual(1);
  });
  it('should decrement', () => {
    expect(counter(1, {type: 'DECREMENT'})).toEqual(0);
  });
})