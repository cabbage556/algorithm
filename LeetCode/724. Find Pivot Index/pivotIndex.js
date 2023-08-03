/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  // calculate the pivot index of this array
  // pivot index
  //    the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
  const sumLeft = [];
  const sumRight = [];
  let totalSum = 0;

  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];

    if (i === 0) {
      sumLeft[i] = 0;
      continue;
    }

    sumLeft[i] = sumLeft[i - 1] + nums[i - 1];
  }

  for (let i = 0; i < nums.length; i++) {
    totalSum -= nums[i];
    sumRight[i] = totalSum;
  }

  for (let i = 0; i < sumLeft.length; i++) {
    if (sumLeft[i] === sumRight[i]) {
      return i;
    }
  }

  return -1;
};

// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 2, 3]));
// console.log(pivotIndex([2, 1, -1]));

var pivotIndex2 = function (nums) {
  let totalSum = 0;
  let leftSum = 0;

  for (const num of nums) {
    totalSum += num;
  }

  for (let i = 0; i < nums.length; i++) {
    if (leftSum === totalSum - leftSum - nums[i]) {
      return i;
    }
    leftSum += nums[i];
  }

  return -1;
};

console.log(pivotIndex2([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex2([1, 2, 3]));
console.log(pivotIndex2[(2, 1, -1)]);
