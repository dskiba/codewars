/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// export const findAnagrams = (s, p) => {
//   const res = []
//   const arr = s.split('')
//   const { length } = p
//   const anagramToTest = p.split('').sort().join('')
//   for (let i = 0; i < arr.length; i++) {
//     const stringToTest = arr.slice(i, length + i).sort().join('')
//     if (stringToTest === anagramToTest) res.push(i)
//   }
//   return res
// };


// for long len strings

export const findAnagrams = (s, p) => {
  const res = []
  const pHash = new Map();
  for (let i = 0; i < p.length; i++) {
    const char = p[i]
    const count = pHash.get(char) || 0
    pHash.set(char, count + 1)
  }
  for (let j = 0; j < s.length; j++) {
    const substr = s.substring(j, j + p.length)
    const sHash = new Map()
    for (let k = 0; k < substr.length; k++) {
      const char = substr[k]
      const count = sHash.get(char) || 0
      sHash.set(char, count + 1)
    }
    if ([...pHash].every(([c, count]) => sHash.get(c) === count)) {
      res.push(j)
    }
  }
  return res
};
