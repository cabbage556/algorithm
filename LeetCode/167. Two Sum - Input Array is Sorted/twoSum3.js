/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  // target과 현재 값의 차이를 이진 탐색으로 찾기
  for (let i = 0; i < numbers.length; i++) {
    // target과 현재 값의 차이
    const currentTarget = target - numbers[i];
    let left = 0;
    let right = numbers.length - 1;

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);

      // 중앙값과 currentTarget이 같은 경우
      if (numbers[mid] === currentTarget) {
        // mid와 i가 같은 경우 중복 인덱스는 허용되지 않으므로 break
        if (mid === i) break;

        // 문제는 인덱스가 1부터 시작한다고 가정하므로 1을 더함
        // i와 mid의 순서가 올바르도록 정렬
        return [i + 1, mid + 1].sort((a, b) => a - b);
      } else if (numbers[mid] < currentTarget) left = mid + 1;
      else if (numbers[mid] > currentTarget) right = mid - 1;
    }
  }
};
