import { Vector } from './Vector';

describe('Vector_class', () => {
  const a = new Vector([1, 2, 3]);
  const b = new Vector([3, 4, 5]);
  const c = new Vector([5, 6, 7, 8]);
  it('should return a new Vector([4, 6, 8])', () => {
    expect(a.add(b).equals(new Vector([4, 6, 8]))).toEqual(true);
  });

  it(' should return a new Vector([-2, -2, -2])', () => {
    expect(a.subtract(b).equals(new Vector([-2, -2, -2]))).toEqual(true);
  });

  it('Vdot.', () => {
    // TODO Your own assertion here
    expect(a.dot(b)).toEqual(26)
  });

  it('norm', () => {
    expect(a.norm()).toEqual(14);
  });

  it('size', () => {
    expect(a.add(c)).toThrow(Error, 'should be same size');
  });
  it('equals', () => {
    expect(a.add(b).equals(new Vector([4, 6, 3]))).toEqual([4, 6, 8]);
  });
});
