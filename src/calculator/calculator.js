export const Calculator = function () {
  this.evaluate = (str) => {
    const arr = str.split(' ')
    let res = Number(arr[0])
    arr.forEach((s, idx) => {
      const next = Number(arr[idx + 1])
      const isOperator = Number.isNaN(Number(s))
      if (isOperator) {
        console.log({ s, res, next })
        switch (s) {
          case '+': {
            res += next
            break
          }
          case '/': {
            res /= next
            break
          }
          case '-': {
            res -= +next
            break
          }
          case '*': {
            res *= next
            break
          }
          default: break
        }
      }
    })
    return res
  }
};
