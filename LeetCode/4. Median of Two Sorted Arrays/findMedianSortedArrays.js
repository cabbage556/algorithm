/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // 두 배열을 정렬된 순서로 병합하기
  const merged = [];
  let left1 = 0; // nums1 포인터
  let left2 = 0; // nums2 포인터

  for (let i = 0; i < nums1.length + nums2.length; i++) {
    // 두 배열의 원소 중 더 작은 원소를 먼저 넣기
    if (nums1[left1] > nums2[left2]) {
      if (nums2[left2] !== undefined) {
        merged.push(nums2[left2]);
        left2++;
      }
    } else {
      if (nums1[left1] !== undefined) {
        merged.push(nums1[left1]);
        left1++;
      }
    }

    // nums1 배열에 더이상 넣을 요소가 없고 left2 포인터가 가리키는 요소가 존재하는 경우
    if (!nums1[left1] && nums2[left2] !== undefined) {
      merged.push(nums2[left2]);
      left2++;
      continue;
    }
    // nums2 배열에 더이상 넣을 요소가 없고 left1 포인터가 가리키는 요소가 존재하는 경우
    if (!nums2[left2] && nums1[left1] !== undefined) {
      merged.push(nums1[left1]);
      left1++;
    }
  }

  // 병합된 배열의 중앙 포인터
  const mid = Math.floor((merged.length - 1) / 2);

  // 홀수 개수를 가지면 그대로 리턴
  if (merged.length % 2 === 1) return merged[mid];
  // 짝수 개수를 가지면 가운데 두 요소를 더해 2로 나눠서 리턴
  return (merged[mid] + merged[mid + 1]) / 2;
};
