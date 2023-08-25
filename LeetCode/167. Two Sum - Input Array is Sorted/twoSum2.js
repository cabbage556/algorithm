/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let [left, right] = [0, numbers.length - 1];

  while (numbers[left] + numbers[right] !== target) {
    if (numbers[left] + numbers[right] < target) {
      left++;
    } else {
      right--;
    }
  }

  // console.log(left, right);
  return [++left, ++right];
};

console.log(twoSum([1, 2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));
