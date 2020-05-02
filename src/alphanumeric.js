export const alphanumeric = (string) => /^[a-z\d]+$/i.test(string)


// In this example you have to validate if a user input string is alphanumeric.
// The given string is not nil/null/NULL/None, so you don't have to check that.
//
// The string has the following conditions to be alphanumeric:
//
//     At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore


const solution = function (isBadVersion) {
  /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
  return function (n) {
    let res = null
    for (let i = n; i > 0; i--) {
      if (!isBadVersion(i)) {
            i > 1 ? res=i+1 : res = 1
      }
    }
  return res
};

const isBadVersionF = (n) => n === 4

solution(isBadVersionF)(5)
