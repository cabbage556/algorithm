/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  for (let i = nums.length - 1; i >= 0; i--) {
    nums[i + k] = nums[i];
  }
  for (let i = k - 1; i >= 0; i--) {
    nums[i] = nums.pop();
  }
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);
rotate([-1, -100, 3, 99], 2);
rotate([-1], 2);
