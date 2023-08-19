/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  // 내림차순 정렬
  nums.sort((a, b) => b - a);

  let count = 1;
  let prev = nums[0];
  for (let i = 1; i < nums.length; i++) {
    // 중복 숫자 구별
    if (nums[i] !== prev) {
      count++;
      prev = nums[i];
    }

    // 중복되지 않는 세번째 가장 큰 수 리턴
    if (count === 3) {
      return nums[i];
    }
  }

  // 세번째 가장 큰 수를 찾을 수 없는 경우 가장 큰 수 리턴
  return nums[0];
};

console.log(thirdMax([3, 2, 1]));
console.log(thirdMax([1, 2]));
console.log(thirdMax([2, 2, 3, 1]));

// Complexity
//    Time Complexity: O(NlogN)
//      sort the nums array - O(NlogN)
//      iterate on the nums array to find the 3rd distinct number - O(N)
//      O(NlogN) + O(N) = O(NlogN)
//    Space Complexity: O(1)
//      no additional space
