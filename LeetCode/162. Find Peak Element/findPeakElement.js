/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    // 중앙값이 중앙값 바로 다음 값보다 크면 right 포인터 mid로 이동
    if (nums[mid] > nums[mid + 1]) right = mid;
    // 그렇지 않으면 left 포인터 mid 다음으로 이동
    else left = mid + 1;
  }

  // left 포인터와 right 포인터가 같은 곳을 가리키는데 그곳이 peak 원소
  return left;
};
