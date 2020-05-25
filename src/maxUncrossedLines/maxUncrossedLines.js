/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
export const maxUncrossedLines = function (A, B) {
  const ALen = A.length
  const BLen = B.length
  const res = new Array(ALen + 1)
  for (let i = 0; i < ALen + 1; i++) {
    res[i] = new Array(BLen + 1).fill(0)
  }
  for (let i = 1, totalA = ALen; i < totalA + 1; i++) {
    for (let j = 1, totalB = BLen; j < totalB + 1; j++) {
      if (A[i - 1] === B[j - 1]) {
        res[i][j] = res[i - 1][j - 1] + 1
      } else {
        res[i][j] = Math.max(res[i][j - 1], res[i - 1][j])
      }
    }
  }
  return res[A.length][B.length]
};
