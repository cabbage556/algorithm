/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let uniqueIdx = 0;
  let currentIdx = 0;

  while (currentIdx < nums.length) {
    if (nums[uniqueIdx] !== nums[currentIdx]) {
      uniqueIdx++;
      nums[uniqueIdx] = nums[currentIdx];
    }
    currentIdx++;
  }

  return uniqueIdx + 1;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
