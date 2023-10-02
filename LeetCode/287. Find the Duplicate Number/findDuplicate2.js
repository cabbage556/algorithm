/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  // 이진 탐색 전처리: 정렬
  nums.sort((a, b) => a - b);

  // nums의 각 요소에 대해 이진 탐색 수행
  for (let i = 0; i < nums.length; i++) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);

      if (nums[i] === nums[mid]) {
        if (i === mid) break; // 같은 인덱스의 값은 중복 요소가 아니므로 break
        return nums[i];
      } else if (nums[i] < nums[mid]) right = mid - 1;
      else if (nums[i] > nums[mid]) left = mid + 1;
    }
  }
};
