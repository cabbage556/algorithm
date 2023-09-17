/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  const hashMap = new Map();

  // nums1, nums2 원소 합을 키로, 합의 갯수를 값으로 저장
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      const sum = nums1[i] + nums2[j];
      if (!hashMap.has(sum)) {
        hashMap.set(sum, 0);
      }
      hashMap.set(sum, hashMap.get(sum) + 1);
    }
  }

  let count = 0;
  for (let k = 0; k < nums3.length; k++) {
    for (let l = 0; l < nums4.length; l++) {
      // 모든 원소의 합을 더했을 떄 0이 되도록 nums3, nums4 원소 합에 -1을 곱함
      const minusSum = -1 * (nums3[k] + nums4[l]);
      if (hashMap.has(minusSum)) {
        count += hashMap.get(minusSum);
      }
    }
  }
  return count;
};
