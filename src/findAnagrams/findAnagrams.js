/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
export const findAnagrams = (s, p) => {
  const res = []
  const arr = s.split('')
  const { length } = p
  const anagramToTest = p.split('').sort().join('')
  for (let i = 0; i < arr.length; i++) {
    const stringToTest = arr.slice(i, length + i).sort().join('')
    if (stringToTest === anagramToTest) res.push(i)
  }
  return res
};
