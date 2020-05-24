import { intervalIntersection } from './intervalIntersection';

describe('intervalIntersection', () => {
  it('intervalIntersection does this thing...', () => {
    const inputA = [[0, 2], [5, 10], [13, 23], [24, 25]]
    const inputB = [[1, 5], [8, 12], [15, 24], [25, 26]]
    const res = [[1, 2], [5, 5], [8, 10], [15, 23], [24, 24], [25, 25]]
    expect(intervalIntersection(inputA, inputB)).toEqual(res)
  });
});
