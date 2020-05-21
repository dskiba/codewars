import { parseInt } from './parseInt';

describe('parseInt', () => {
  it('parseInt does this thing...', () => {
    const input = 'one'
    const res = 1
    expect(parseInt(input)).toEqual(res)
  });

  it('parseInt does this thing...', () => {
    const input = 'twenty'
    const res = 20
    expect(parseInt(input)).toEqual(res)
  });

  it('parseInt does this thing...', () => {
    const input = 'two hundred forty-six'
    const res = 246
    expect(parseInt(input)).toEqual(res)
  });
});
