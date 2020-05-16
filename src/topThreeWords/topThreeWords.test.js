import { topThreeWords } from './topThreeWords';

describe('topThreeWords', () => {
  it('topThreeWords ', () => {
    const res = ['e', 'd', 'a']
    expect(topThreeWords('a a a  b  c c  d d d d  e e e e e')).toEqual(res)
  });
  it('topThreeWords ', () => {
    const res = ['e', 'ddd', 'aa']
    expect(topThreeWords('e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e')).toEqual(res)
  });
  it('topThreeWords ', () => {
    const res = ['e']
    expect(topThreeWords('  , e   .. ')).toEqual(res)
  });
  it('topThreeWords ', () => {
    const res = []
    expect(topThreeWords('  ...  ')).toEqual(res)
  });
  it('topThreeWords ', () => {
    const res = []
    expect(topThreeWords("  '  ")).toEqual(res)
  });
  it('topThreeWords ', () => {
    const res = ["won't", 'wont']
    expect(topThreeWords("  //wont won't won't ")).toEqual(res)
  });

  it('topThreeWords ', () => {
    // const res = ['from', 'A', 'a'] // TODO wrong
    const res = ['a', 'from', 'rat']
    expect(topThreeWords('A rat jumped from the jedi from a frog ')).toEqual(res)
  });
});
