/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const indices = hashMap.get(nums[i]) ?? null;
    if (!indices) {
      hashMap.set(nums[i], [i]);
    } else {
      indices.push(i);
    }
  }

  for (const [key, indices] of hashMap) {
    if (indices.length === 1) {
      continue;
    }

    for (let i = 0; i < indices.length - 1; i++) {
      if (indices[i + 1] - indices[i] <= k) {
        return true;
      }
    }
  }

  return false;
};
