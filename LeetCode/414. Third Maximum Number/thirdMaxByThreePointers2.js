/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  // 3 Pointers with restriction
  //    no long big integers

  // keep boolean variables to indicate if firstMax, secondMax, thirdMax were ever changed or not
  let firstMax = [-1, false], // [value, updated]
    secondMax = [-1, false],
    thirdMax = [-1, false];

  for (const num of nums) {
    // 이미 저장한 값이면 넘어가기
    if (
      (firstMax[1] && firstMax[0] === num) ||
      (secondMax[1] && secondMax[0] === num) ||
      (thirdMax[1] && thirdMax[0] === num)
    ) {
      continue;
    }

    // firstMax를 업데이트하지 않았거나 현재 숫자가 firstMax의 값보다 큰 경우
    if (!firstMax[1] || firstMax[0] < num) {
      thirdMax = secondMax;
      secondMax = firstMax;
      firstMax = [num, true];
    }
    // secondMax를 업데이트하지 않았거나 현재 숫자가 secondMax의 값보다 큰 경우
    else if (!secondMax[1] || secondMax[0] < num) {
      thirdMax = secondMax;
      secondMax = [num, true];
    }
    // thirdMax를 업데이트하지 않았거나 현재 숫자가 thirdMax의 값보다 큰 경우
    else if (!thirdMax[1] || thirdMax[0] < num) {
      thirdMax = [num, true];
    }
  }

  // thirdMax가 업데이트되지 않았다면 세 번째 큰 숫자가 없으므로 가장 큰 수 리턴
  if (!thirdMax[1]) {
    return firstMax[0];
  }

  return thirdMax[0];
};

console.log(thirdMax([3, 2, 1]));
console.log(thirdMax([1, 2]));
console.log(thirdMax([2, 2, 3, 1]));

// Complexity
//    Time Complexity: O(N)
//      iterate on the nums array
//    Space complexity: O(1)
//      use three variables
