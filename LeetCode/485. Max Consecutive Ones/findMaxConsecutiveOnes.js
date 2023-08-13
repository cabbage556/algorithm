/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  // return the maximum number of consecutive 1's in the array
  let max = 0,
    count = 0;

  for (const num of nums) {
    count += num;
    max = Math.max(max, count);

    if (num === 0) count = 0;
  }

  return max;
};

console.log(findMaxConsecutiveOnes([0, 0, 0]));
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 1, 0]));
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 1, 0, 0, 0, 1]));
