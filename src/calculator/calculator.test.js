import { Calculator } from './calculator';

describe('calculator', () => {
  it('calculator does this thing...', () => {
    const calc = new Calculator()
    const input = '2 + 3 * 4 / 3 - 6 / 3 * 3 + 8'
    const res = 6
    expect(calc.evaluate(input)).toEqual(res)
  });
});
