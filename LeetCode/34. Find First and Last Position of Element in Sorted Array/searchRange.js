/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const range = [-1, -1];
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] >= target) right = mid - 1;
    else left = mid + 1;
  }

  if (nums[left] !== target) return range;
  else range[0] = left;

  left = 0;
  right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] <= target) left = mid + 1;
    else right = mid - 1;
  }

  range[1] = right;
  return range;
};
