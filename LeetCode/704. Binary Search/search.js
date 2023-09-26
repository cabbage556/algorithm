/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // left, right 인덱스
  let left = 0,
    right = nums.length - 1;

  // 탐색 조건: left 인덱스가 right 인덱스 이하일 때까지
  while (left <= right) {
    // left, right 인덱스의 중앙 인덱스 계산
    let mid = Math.floor((left + right) / 2);

    // 중앙 값에 따라 right, left 인덱스 이동 또는 타겟과 같으면 중앙 인덱스 리턴
    if (nums[mid] === target) return mid;
    else if (nums[mid] > target) right = mid - 1;
    else if (nums[mid] < target) left = mid + 1;
  }

  return -1;
};
