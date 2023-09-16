/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const map1 = new Map();
  const map2 = new Map();

  // nums1, nums2 배열 원소의 등장 횟수 계산
  for (let i = 0; i < nums1.length; i++) {
    const num = nums1[i];
    if (!map1.has(num)) {
      map1.set(num, 1);
    } else {
      map1.set(num, map1.get(num) + 1);
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    const num = nums2[i];
    if (!map2.has(num)) {
      map2.set(num, 1);
    } else {
      map2.set(num, map2.get(num) + 1);
    }
  }

  const result = [];
  for (const [key, value1] of map1) {
    if (!map2.has(key)) {
      continue;
    }

    // 원소의 최소 등장 횟수만큼 결과에 추가
    const value2 = map2.get(key);
    for (let i = 0; i < Math.min(value1, value2); i++) {
      result.push(key);
    }
  }
  return result;
};
