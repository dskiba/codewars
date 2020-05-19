/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
export const checkInclusion = (s1, s2) => {
  let res = false
  const shortS = new Map();
  for (let i = 0; i < s1.length; i++) {
    const char = s1[i]
    const count = shortS.get(char) || 0
    shortS.set(char, count + 1)
  }
  for (let j = 0; j < s2.length; j++) {
    const substr = s2.substring(j, j + s1.length)
    const sHash = new Map()
    for (let k = 0; k < substr.length; k++) {
      const char = substr[k]
      const count = sHash.get(char) || 0
      sHash.set(char, count + 1)
    }
    if (substr.length === s1.length && [...sHash].every(([c, count]) => shortS.get(c) === count)) {
      res = true
    }
  }
  return res
};
