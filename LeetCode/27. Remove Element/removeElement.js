/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    if (nums[right] === val) {
      right--;
      continue;
    }
    if (nums[left] !== val) {
      left++;
      continue;
    }

    let temp = nums[right];
    nums[right] = nums[left];
    nums[left] = temp;
    left++;
    right--;
  }

  return right + 1;
};

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
console.log(removeElement([1], 1));
