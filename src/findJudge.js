export const findJudge = (N, trust) => {
  if (trust.length === 0) return 1
  let res = -1
  const count = new Map()
  for (const t of trust) {
    const [id, target] = t
    count.set(id, count.has(id) ? count.get(id) - 1 : -1)
    count.set(target, count.has(target) ? count.get(target) + 1 : 1)
  }
  console.log({ count });
  [...count].forEach((t) => {
    const [id, score] = t
    if (score === N - 1) res = id
  })
  return res
}

//
// export const findJudge = (N, trust) => {
//   let res = -1
//   const count = {}
//   for (const t of trust) {
//     count[t[0]] = count[t[0]] ? count[t[0]] - 1 : 1
//     count[t[1]] = count[t[1]] ? count[t[1]] + 1 : 1
//   }
//   console.log({ count })
//   const keys = Object.keys(count)
//   if (keys.length !== trust.length) {
//     keys.forEach((k) => {
//       if (count[k] === N - 1) res = Number(k)
//     })
//   }
//   console.log({res})
//   return res
// }
