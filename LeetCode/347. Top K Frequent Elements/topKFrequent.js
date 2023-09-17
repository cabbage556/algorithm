/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const hashMap = new Map();
  const countToIndex = [];
  const topK = [];

  // nums 원소 등장 횟수 저장
  for (let i = 0; i < nums.length; i++) {
    hashMap.set(nums[i], (hashMap.get(nums[i]) ?? 0) + 1);
  }

  // 등장 횟수를 인덱스로 사용하여 동일한 등장 횟수의 원소를 배열에 묶기
  for (const [num, count] of hashMap) {
    if (!countToIndex[count]) {
      countToIndex[count] = [];
    }
    countToIndex[count].push(num);
  }

  for (let i = countToIndex.length - 1; i >= 0; i--) {
    // 뒤에서부터(가장 많이 등장한 원소부터) 추가
    if (countToIndex[i]) {
      topK.push(...countToIndex[i]);
    }
    // k개이면 리턴
    if (topK.length === k) {
      return topK;
    }
  }
};
