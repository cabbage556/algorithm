/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  // 이진 탐색
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    // 중앙값과 right 포인터 값이 같다면 중복이라는 의미이므로 right 1 감소
    if (nums[mid] === nums[right]) right--; // duplicate
    // 중앙값이 right 포인터 값보다 크다면 최소값은 mid + 1 ~ right 사이에 위치
    else if (nums[mid] > nums[right]) left = mid + 1;
    // 중앙값이 right 포인터 값보다 작으면 최소값은 left ~ mid 사이에 위치
    else if (nums[mid] < nums[right]) right = mid;
  }

  // left 후처리
  //    탐색 종료 조건: left === right
  return nums[left];
};
