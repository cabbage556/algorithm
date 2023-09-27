/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    // 배열 회전시켜서 규칙 찾아보기
    // mid 값보다 right 값이 큰 경우 최솟값은 left ~ mid 사이에 위치함
    if (nums[mid] < nums[right]) right = mid;
    // mid 값이 right 값보다 큰 경우 최솟값은 mid ~ right 사이에 위치함
    else left = mid + 1;
  }

  return nums[left];
};
