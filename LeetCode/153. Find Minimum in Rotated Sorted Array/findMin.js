/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  // 최댓값의 인덱스 찾기
  let maxIndex = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[maxIndex] < nums[i]) maxIndex = i;
  }

  // 배열이 회전하는 경우 최댓값의 바로 오른쪽 인덱스의 값이 최솟값
  // 최댓값이 마지막 원소인 경우 최솟값의 인덱스는 0
  let minIndex;
  if (maxIndex + 1 === nums.length) minIndex = 0;
  else minIndex = maxIndex + 1;

  return nums[minIndex];
};
