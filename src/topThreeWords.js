/**
 * @param {string} text
 */
export const topThreeWords = (text) => {
  const wordsArr = text.split(' ')
  const resCount = {}
  wordsArr.forEach((word) => {
    const clearedWord = word.replace(/[^\w\s']+/, '').toLowerCase()
    if (!(new RegExp(/^[a-zA-Z]/).test(clearedWord))) {
      return
    }
    if (!resCount[clearedWord]) {
      resCount[clearedWord] = 1
    } else if (clearedWord.length > 0) {
      resCount[clearedWord] += 1
    }
  })

  const arrWithResults = []
  Object
    .keys(resCount)
    .forEach((k) => arrWithResults.push({
      value: k,
      count: resCount[k],
    }))

  const sortedArr = arrWithResults
    .sort((a, b) => {
      if (a.count === b.count) {
        return a.value.localeCompare(b.value)
      }
      return b.count - a.count
    })

  const result = []
  sortedArr.forEach((obj, idx) => {
    if (obj.value && idx < 3) {
      result.push(obj.value)
    }
  })
  return result
};

// top solution
//
// let topThreeWords = text => {
//   let dict = new Map();
//   text.replace(/[A-z']+(?=[ ]+|$)/g, match => {
//     let word = match.toLowerCase();
//     dict.set(word, dict.has(word) ? dict.get(word) + 1 : 1);
//   });
//   dict.delete("'");
//   return [...dict].sort((a, b) => b[1] - a[1]).map(a => a[0]).slice(0, 3);
// };
