/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  // Ordered Set
  //  set: data structure that only keeps unique elements in it
  //  ordered set: keep those unique elements in sorted order

  // Ordered set을 사용하여 배열의 가장 큰 요소 3개를 추적
  let sortedNums = new Set();

  for (const index in nums) {
    const currentNum = nums[index];

    // 이미 가지고 있다면 넘어감
    if (sortedNums.has(currentNum)) {
      continue;
    }

    // 집합 크기가 3이면 집합에서 가장 작은 숫자와 현재 숫자 비교
    if (sortedNums.size === 3) {
      let [first] = sortedNums;
      if (first < currentNum) {
        sortedNums.delete(first);
        sortedNums.add(currentNum);
      }
    }
    // 집합 크기가 3이 아니면 집합에 추가
    else {
      sortedNums.add(currentNum);
    }

    // 오름차순으로 정렬 후 다시 집합으로 할당(최대 3개의 요소)
    sortedNums = new Set([...sortedNums].sort((a, b) => a - b));
  }

  // 집합에 3개의 요소가 있으면 첫 번째 요소 리턴
  if (sortedNums.size === 3) {
    let [first] = sortedNums;
    return first;
  }

  // 집합에 3개의 요소가 없으면 마지막 요소 리턴
  return Array.from(sortedNums).pop();
};

console.log(thirdMax([3, 2, 1]));
console.log(thirdMax([1, 2]));
console.log(thirdMax([2, 2, 3, 1]));

// Complexity
//    Time Complexity: O(N)
//      iterate on the nums array and push each element in the ordered set once - O(N)
//      the ordered set will have at most three elements in it, so push and pop operations are considered constant time operations - O(1)
//    Space complexity: O(1)
//      the ordered set will only have three elements in it, so it is considered as constant space usage
