/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  // move all the even integers at the beginning of the array followed by all the odd integers
  let writePointer = 0;
  for (let readPointer = 0; readPointer < nums.length; readPointer++) {
    if (nums[writePointer] % 2 === 0) {
      writePointer++;
      continue;
    }

    if (nums[readPointer] % 2 === 0) {
      let temp = nums[writePointer];
      nums[writePointer] = nums[readPointer];
      nums[readPointer] = temp;
      writePointer++;
    }
  }

  return nums;
};

console.log(sortArrayByParity([3, 1, 2, 4]));
console.log(sortArrayByParity([0]));
console.log(sortArrayByParity([2, 4, 1, 2, 3, 4]));

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity2 = function (nums) {
  // 짝수가 앞으로 오도록 정렬하는 방법
  nums.sort((a, b) => (a % 2) - (b % 2));

  return nums;
};

console.log(sortArrayByParity2([3, 1, 2, 4]));
console.log(sortArrayByParity2([0]));
console.log(sortArrayByParity2([2, 4, 1, 2, 3, 4]));

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity3 = function (nums) {
  const sortArray = new Array(nums.length);
  let arrayIdx = 0;

  // 짝수 먼저 넣기
  for (const num of nums) {
    if (num % 2 === 0) sortArray[arrayIdx++] = num;
  }

  // 홀수 나중에 넣기
  for (const num of nums) {
    if (num % 2 === 1) sortArray[arrayIdx++] = num;
  }

  return sortArray;
};

console.log(sortArrayByParity3([3, 1, 2, 4]));
console.log(sortArrayByParity3([0]));
console.log(sortArrayByParity3([2, 4, 1, 2, 3, 4]));
