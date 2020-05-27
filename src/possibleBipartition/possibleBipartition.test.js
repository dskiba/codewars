import { possibleBipartition } from './possibleBipartition';

describe('possibleBipartition', () => {
  it('possibleBipartition does this thing...', () => {
    const N = 4
    const dislikes = [[1, 2], [1, 3], [2, 4]]
    const res = true
    expect(possibleBipartition(N, dislikes)).toEqual(res)
  });
});
