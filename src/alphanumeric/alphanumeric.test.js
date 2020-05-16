import { alphanumeric } from './alphanumeric';

describe('alphanumeric', () => {
  it('alphanumeric does this thing...', () => {
    expect(alphanumeric('')).toEqual(false)
  });
  it('alphanumeric underscore.', () => {
    expect(alphanumeric('hello world_')).toEqual(false)
  });
  it('alphanumeric test empty string\'    \'', () => {
    expect(alphanumeric('     ')).toEqual(false)
  });

  it('alphanumeric passw0rd.', () => {
    expect(alphanumeric('PassW0rd')).toEqual(true)
  });

  it('alphanumeric empty string to false', () => {
    expect(alphanumeric('')).toEqual(false)
  });
});
