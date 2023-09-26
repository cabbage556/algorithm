/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // x의 제곱근은 x를 2로 나눈 몫에서 1을 더한 값을 넘을 수 없음
  let left = 1,
    right = Math.floor(x / 2) + 1;

  // 이진 탐색 조건: left가 right보다 작을 때까지
  while (left <= right) {
    // 중앙값 구하기
    const mid = Math.floor((left + right) / 2);

    // 중앙값의 제곱값과 x 비교
    if (mid * mid > x) right = mid - 1;
    else if (mid * mid < x) left = mid + 1;
    else return mid;
  }

  // 이진 탐색동안 찾지 못하면 right 값 리턴
  return right;
};
