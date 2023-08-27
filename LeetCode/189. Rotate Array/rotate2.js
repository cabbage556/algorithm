/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const numsLength = nums.length;

  for (let i = numsLength - 1; i >= numsLength - k; i--) {
    const rotateNum = nums[numsLength - 1];

    for (let j = numsLength - 1; j >= 0; j--) {
      nums[j] = nums[j - 1];
    }

    nums[0] = rotateNum;
  }
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);
rotate([-1, -100, 3, 99], 2);
