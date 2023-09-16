/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    // 현재 숫자의 마지막 인덱스와 현재 인덱스가 k 이하이면 true 리턴
    const lastIndex = hashMap.get(nums[i]) ?? null;
    if (lastIndex !== null && i - lastIndex <= k) {
      return true;
    }

    // 현재 인덱스를 마지막 인덱스로 업데이트
    hashMap.set(nums[i], i);
  }

  return false;
};
