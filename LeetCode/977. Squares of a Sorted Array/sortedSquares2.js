/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares2 = function (nums) {
  const sortedSquare = new Array(nums.length);
  let left = 0,
    right = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      sortedSquare[i] = nums[right] ** 2;
      right--;
    } else {
      sortedSquare[i] = nums[left] ** 2;
      left++;
    }
  }

  return sortedSquare;
};

console.log(sortedSquares2([-4, -1, 0, 3, 10]));
console.log(sortedSquares2([-7, -3, 2, 3, 11]));
