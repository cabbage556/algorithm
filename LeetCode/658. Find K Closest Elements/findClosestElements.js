/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  // x가 첫 번째 원소보다 작으면 처음부터 k개를 잘라서 리턴
  if (x < arr[0]) return arr.slice(0, k);

  // left, right 포인터
  let left = 0;
  let right = arr.length - 1;
  while (right - left >= k) {
    // x와 left와의 거리가 right와의 거리보다 작으면 right 포인터 감소
    if (Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)) right--;
    // 그렇지 않으면 left 포인터 증가
    else left++;
  }

  // left부터 k개 자르기
  return arr.slice(left, right + 1);
};
