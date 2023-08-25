/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  for (let left = 0; left < numbers.length; left++) {
    for (let right = numbers.length - 1; right > left; right--) {
      if (numbers[left] + numbers[right] === target) {
        return [left + 1, right + 1];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));
