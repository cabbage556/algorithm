/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let left = 1;
  let right = n;

  // 이진 탐색 조건
  while (left <= right) {
    // 중앙값 계산
    const mid = Math.floor((left + right) / 2);

    // 문제에서 제공하는 guess 함수 호출
    const guessResult = guess(mid);

    // 0인 경우 중앙값과 같음
    if (guessResult === 0) return mid;
    // -1인 경우 중앙값보다 작으므로 right 값을 중앙값보다 작게
    else if (guessResult < 0) right = mid - 1;
    // 1인 경우 중앙값보다 크므로 left 값을 중앙값보다 크게
    else if (guessResult > 0) left = mid + 1;
  }
};
