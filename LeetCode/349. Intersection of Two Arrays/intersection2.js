/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const result = [];

  // 이진 탐색 전처리: 정렬
  nums2.sort((a, b) => a - b);

  // nums1의 각 요소를 nums2에서 이진 탐색
  for (const num of nums1) {
    let left = 0;
    let right = nums2.length - 1;

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);

      if (num === nums2[mid]) {
        if (!result.includes(num)) result.push(num);
        break;
      } else if (num < nums2[mid]) right = mid - 1;
      else if (num > nums2[mid]) left = mid + 1;
    }
  }
  return result;
};
