import { checkInclusion } from './stringPermutation';

describe('stringPermutation', () => {
  it('stringPermutation does this thing...', () => {
    const res = true
    expect(checkInclusion('ab', 'eidbaooo')).toEqual(res)
  })

  it('stringPermutation does this thing...', () => {
    const res = false
    expect(checkInclusion('ab', 'eidboaoo')).toEqual(res)
  });
  it('stringPermutation does this thing...', () => {
    const res = false
    expect(checkInclusion('hello',
      'ooolleoooleh')).toEqual(res)
  });
});
