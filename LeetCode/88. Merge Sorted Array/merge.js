/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let nums1Index = nums1.length - 1;

  while (nums1Index >= 0) {
    const num1 = nums1[m - 1] ?? -Infinity;
    const num2 = nums2[n - 1] ?? -Infinity;

    if (num1 >= num2) {
      nums1[nums1Index] = num1;
      m--;
    } else {
      nums1[nums1Index] = num2;
      n--;
    }
    nums1Index--;
  }
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([0], 0, [1], 1);
merge([1], 1, [], 0);
