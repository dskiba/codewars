export function Dictionary(words) {
  this.words = words
}

function editDistance(s1, s2) {
  s1 = s1.toLowerCase()
  s2 = s2.toLowerCase()
  const costs = []
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0) costs[j] = j
      else if (j > 0) {
        let newValue = costs[j - 1]
        if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
          newValue = Math.min(Math.min(newValue, lastValue),
            costs[j]) + 1
        }
        costs[j - 1] = lastValue
        lastValue = newValue
      }
    }
    if (i > 0) costs[s2.length] = lastValue
  }
  return costs[s2.length]
}

Dictionary.prototype.findMostSimilar = function (term) {
  const { words } = this
  const dict = new Map()
  const termLength = term.length
  for (let w = 0; w < words.length; w++) {
    const dicWord = words[w]
    let longer = dicWord
    const dicWordL = dicWord.length
    let shorter = term
    if (dicWordL < termLength) {
      longer = term
      shorter = dicWord
    }
    const longerLength = longer.length
    if (longerLength === 0) {
      return 1.0
    }
    const distance = editDistance(longer, shorter)
    dict.set(dicWord, (longerLength - distance) / parseFloat(longerLength))
  }
  const sorted = [...dict]
    .sort(([_, score], [_n, nScore]) => nScore - score)
  return sorted[0][0]
}


// top solution:
//
// function Dictionary(words) {
//     this.words = words;
// }
//
// Dictionary.prototype.findMostSimilar = function(term) {
//     var levenshtein = function(word) {
//         if (word === term) {return 0}
//         if (term.length === 0) {return word.length}
//         if (word.length === 0) {return term.length}
//         var v0 = new Array(term.length + 1);
//         var v1 = new Array(term.length + 1);
//         for (var i=0; i<v0.length; i++) { v0[i] = i; }
//         for (var i=0; i<word.length; i++) {
//             v1[0] = i+1;
//             for (var j=0; j<term.length; j++) {
//                 var cost = word.charAt(i) === term.charAt(j) ? 0 : 1;
//                 v1[j+1] = Math.min(v1[j]+1, v0[j+1]+1, v0[j]+cost);
//             }
//             var tmp = v0;
//             v0 = v1;
//             v1 = tmp;
//         }
//         return v0[term.length];
//     }
//     return this.words.sort(function(a,b){return levenshtein(a)-levenshtein(b)})[0];
// }
