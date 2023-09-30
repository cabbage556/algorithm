/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  // num의 제곱근의 범위: 1 ~ num / 2 + 1
  let left = 1;
  let right = Math.floor(num / 2) + 1;

  // 이진 탐색
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const sqed = mid * mid; // 중앙값의 제곱

    // 완벽한 제곱근이면 true 리턴
    if (sqed === num) return true;
    else if (sqed < num) left = mid + 1; // left 업데이트
    else if (sqed > num) right = mid - 1; // right 업데이트
  }

  // 이진 탐색 도중 제곱근을 찾지 못하면 완벽한 제곱이 아님
  return false;
};
