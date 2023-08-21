/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let maxIdx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[maxIdx]) {
      maxIdx = i;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i === maxIdx) {
      continue;
    }

    if (nums[i] * 2 > nums[maxIdx]) {
      return -1;
    }
  }

  return maxIdx;
};

console.log(dominantIndex([3, 6, 1, 0]));
console.log(dominantIndex([1, 2, 3, 4]));
