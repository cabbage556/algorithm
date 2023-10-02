/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  // 정렬 후 인접 요소 비교
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) return nums[i];
  }
};
