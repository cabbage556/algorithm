/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const result = [];
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  set1.forEach((key) => {
    if (set2.has(key)) {
      result.push(key);
    }
  });
  return result;
};
