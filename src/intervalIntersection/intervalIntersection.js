/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
export const intervalIntersection = function (A, B) {
  const res = []
  for (let i = 0; i < A.length; i++) {
    const temp = []
    for (let j = 0; j < B.length; j++) {
      const [AFrom, ATo] = A[i]
      const [BFrom, BTo] = B[j]
      const t = []
      if (ATo < BFrom) break;
      if (BFrom >= AFrom && BFrom <= ATo) t.push(BFrom)
      if (AFrom >= BFrom && AFrom <= BTo) t.push(AFrom)
      if (ATo >= BFrom && ATo <= BTo) t.push(ATo)
      if (BTo >= AFrom && BTo <= ATo) t.push(BTo)
      if (t.length > 0) {
        const { length } = t
        if (length > 2) {
          const r = [t[0], t[length - 1]]
          temp.push(r)
        } else {
          temp.push(t)
        }
      }
    }
    if (temp.length > 0) {
      res.push(...temp)
    }
  }
  return res
};
