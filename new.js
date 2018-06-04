// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains more than 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
  // do magic
  const filteredArr = arr.filter(val => arr.indexOf(val) == arr.lastIndexOf(val));
  return filteredArr;
};


const test1 = [ 0, 1, 0, 0, 0 ];
const test2 = [ 1, 1, 1, 2, 1, 1 ];
const test3 = [ 3, 10, 3, 3, 3 ];


console.log(findUniq(test1));
console.log(findUniq(test2));
console.log(findUniq(test3));




