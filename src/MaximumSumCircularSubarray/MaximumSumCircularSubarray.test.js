import { maxSubarraySumCircular } from './MaximumSumCircularSubarray';


describe('MaximumSumCircularSubarray', () => {
  it('MaximumSumCircularSubarray does a very cool thing...', () => {
    const input = [5, -3, 5]
    const res = 10
    expect(maxSubarraySumCircular(input)).toEqual(res)
  });
  it('MaximumSumCircularSubarray does a very cool thing...', () => {
    const input = [-1, -2, -3]
    const res = -1
    expect(maxSubarraySumCircular(input)).toEqual(res)
  });
  it('MaximumSumCircularSubarray does a very cool thing...', () => {
    const input = [-5, 3, 5]
    const res = 8
    expect(maxSubarraySumCircular(input)).toEqual(res)
  });
});
