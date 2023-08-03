/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  // return a list answer of size 2
  //  answer[0] is a list of all distinct integers in nums1 which are not present in nums2
  //  answer[1] is a list of all distinct integers in nums2 which are not present in nums1
  const map1 = new Map();
  const map2 = new Map();
  const answer = [[], []];

  for (let i = 0; i < nums1.length; i++) {
    map1.set(nums1[i], true);
  }

  for (let i = 0; i < nums2.length; i++) {
    map2.set(nums2[i], true);
  }

  for (let i = 0; i < nums1.length; i++) {
    if (!map2.get(nums1[i])) {
      if (!answer[0].includes(nums1[i])) {
        answer[0].push(nums1[i]);
      }
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (!map1.get(nums2[i])) {
      if (!answer[1].includes(nums2[i])) {
        answer[1].push(nums2[i]);
      }
    }
  }
  console.log(answer);

  return answer;
};

findDifference([1, 2, 3], [2, 4, 6]);
findDifference([1, 2, 3, 3], [1, 1, 2, 2]);
findDifference(
  [80, 5, -20, 33, 26, 29],
  [-69, 0, -36, 52, -84, -34, -67, -100, 80]
);
