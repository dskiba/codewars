import { findJudge } from './findJudge';


describe('findJudge', () => {
  it('findJudge does this thing...', () => {
    const ppl = 4
    const trust = [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]]
    const res = 3
    expect(findJudge(ppl, trust)).toEqual(res)
  });
  it('findJudge does this thing...', () => {
    const ppl = 2
    const trust = [[1, 2]]
    const res = 2
    expect(findJudge(ppl, trust)).toEqual(res)
  });
  it('findJudge does this thing...', () => {
    const ppl = 3
    const trust = [[1, 3], [2, 3]]
    const res = 3
    expect(findJudge(ppl, trust)).toEqual(res)
  });
  it('findJudge does this thing...', () => {
    const ppl = 11
    const trust = [[1, 8], [1, 3], [2, 8], [2, 3], [4, 8], [4, 3], [5, 8], [5, 3], [6, 8], [6, 3], [7, 8], [7, 3], [9, 8], [9, 3], [11, 8], [11, 3]]
    const res = -1
    expect(findJudge(ppl, trust)).toEqual(res)
  });
  it('findJudge does this thing...', () => {
    const ppl = 3
    const trust = [[1, 3], [2, 3], [3, 1]]
    const res = -1
    expect(findJudge(ppl, trust)).toEqual(res)
  });
  it('findJudge does this thing...', () => {
    const ppl = 2
    const trust = [[1, 2]]
    const res = 2
    expect(findJudge(ppl, trust)).toEqual(res)
  });
  it('findJudge does this thing...', () => {
    const ppl = 2
    const trust = [[1, 2], [2, 1]]
    const res = -1
    expect(findJudge(ppl, trust)).toEqual(res)
  });
});
