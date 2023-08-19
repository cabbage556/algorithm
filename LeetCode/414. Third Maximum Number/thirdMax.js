/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  // 중복 제거
  const set = new Set(nums);
  nums = Array.from(set);

  // 내림차순 정렬
  nums.sort((a, b) => b - a);

  // 3번째 큰 값이 없으면 가장 큰 값 리턴
  if (nums.length < 3) {
    return nums[0];
  }

  // 3번째 큰 값 리턴
  return nums[2];
};

console.log(thirdMax([3, 2, 1]));
console.log(thirdMax([1, 2]));
console.log(thirdMax([2, 2, 3, 1]));
