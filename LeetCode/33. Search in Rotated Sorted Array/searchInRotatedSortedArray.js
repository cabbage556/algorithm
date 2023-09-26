/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // 회전 이후 배열의 최댓값을 기준으로 두 구역으로 나누어 이진 탐색 진행
  // 최댓값 이전의 이진 탐색 포인터
  let firstLeft = 0;
  let firstRight = 0;
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[firstRight] < nums[i]) firstRight = i;
    if (nums[i] > nums[i + 1]) break;
  }

  // 최댓값 이후의 이진 탐색 포인터
  let secondLeft = firstRight + 1;
  let secondRight = nums.length - 1;

  // 최댓값 이전의 배열에 대해 이진 탐색 수행
  const maxIndex = firstRight;
  while (target <= nums[maxIndex] && firstLeft <= firstRight) {
    const mid = Math.floor((firstLeft + firstRight) / 2);

    if (nums[mid] === target) return mid;
    else if (nums[mid] > target) firstRight = mid - 1;
    else if (nums[mid] < target) firstLeft = mid + 1;
  }

  // 최댓값 이후의 배열에 대해 이진 탐색 수행
  while (secondLeft <= secondRight) {
    const mid = Math.floor((secondLeft + secondRight) / 2);

    if (nums[mid] === target) return mid;
    else if (nums[mid] > target) secondRight = mid - 1;
    else if (nums[mid] < target) secondLeft = mid + 1;
  }

  // 두 구역에서 타겟과 같은 값을 찾지 못한 경우 -1 리턴
  return -1;
};
