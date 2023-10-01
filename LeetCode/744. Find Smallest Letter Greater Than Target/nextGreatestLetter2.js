/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let left = 0;
  let right = letters.length - 1;

  // 이진 탐색
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    // 중앙값이 target보다 크면 right 포인터 이동
    if (letters[mid] > target) right = mid;
    // 그렇지 않으면 left 포인터 이동
    else left = mid + 1;
  }

  // 후처리: left 포인터의 값 확인
  return letters[left] > target ? letters[left] : letters[0];
};
