/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const idx = Math.abs(nums[i]) - 1;
    nums[idx] = Math.abs(nums[idx]) * -1;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }

  return result;
};

console.log(findDisappearedNumbers([4, 2, 3, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));
