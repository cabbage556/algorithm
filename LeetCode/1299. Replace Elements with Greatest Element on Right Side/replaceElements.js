/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let greatest = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    const num = arr[i];
    arr[i] = greatest;
    greatest = Math.max(greatest, num);
  }

  return arr;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]));
console.log(replaceElements([400]));
