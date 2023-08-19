/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  // 3 Pointers
  // firstMax stores the largest number in the array till now
  // secondMax stores the second largest number till now
  // thirdMax stores the third largest number till now

  let firstMax = Number.MIN_SAFE_INTEGER,
    secondMax = Number.MIN_SAFE_INTEGER,
    thirdMax = Number.MIN_SAFE_INTEGER;

  for (const num of nums) {
    // 이미 저장한 값이면 넘어가기
    if (firstMax === num || secondMax === num || thirdMax === num) {
      continue;
    }

    // 현재 숫자가 가장 큰 숫자보다 큰 경우
    if (firstMax < num) {
      [thirdMax, secondMax, firstMax] = [secondMax, firstMax, num];
    }
    // 현재 숫자가 가장 큰 숫자보다 작고 두 번째 큰 숫자보다 큰 경우
    else if (secondMax < num) {
      [thirdMax, secondMax] = [secondMax, num];
    }
    // 현재 숫자가 가장 큰 숫자, 두 번째 큰 숫자보다 작고 세 번째 큰 숫자보다 큰 경우
    else {
      thirdMax = num;
    }
  }

  // 세 번째 큰 숫자가 없는 경우 가장 큰 숫자 리턴
  if (thirdMax === Number.MIN_SAFE_INTEGER) {
    return firstMax;
  }

  return thirdMax;
};

console.log(thirdMax([3, 2, 1]));
console.log(thirdMax([1, 2]));
console.log(thirdMax([2, 2, 3, 1]));

// Complexity
//    Time Complexity: O(N)
//      iterate on the nums array
//    Space complexity: O(1)
//      use three variables
