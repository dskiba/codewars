import { maxUncrossedLines } from './maxUncrossedLines';

describe('maxUncrossedLines', () => {
  it('maxUncrossedLines does this thing...', () => {
    const A = [1, 4, 2]
    const B = [1, 2, 4]
    const res = 2
    expect(maxUncrossedLines(A, B)).toEqual(res)
  });
});
