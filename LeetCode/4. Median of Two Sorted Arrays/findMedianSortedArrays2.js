let pt1 = 0;
let pt2 = 0;

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let result;
  if ((nums1.length + nums2.length) % 2 === 0) {
    // 두 배열의 길이의 합이 짝수인 경우 가운데 두 개의 원소 중에서 첫 번째 원소 바로 전까지만 접근
    for (let i = 0; i < (nums1.length + nums2.length) / 2 - 1; i++) {
      getMin(nums1, nums2);
    }

    // 가운데 두 개의 원소를 더해서 2로 나누기
    result = (getMin(nums1, nums2) + getMin(nums1, nums2)) / 2;
  } else {
    // 두 배열의 길이의 합이 홀수인 경우 가운데 원소 바로 전까지만 접근
    for (let i = 0; i < Math.floor((nums1.length + nums2.length) / 2); i++) {
      getMin(nums1, nums2);
    }

    // 가운데 원소 할당
    result = getMin(nums1, nums2);
  }

  // 포인터 초기화(전역변수 초기화)
  pt1 = 0;
  pt2 = 0;
  return result;
};

var getMin = function (nums1, nums2) {
  // 두 포인터가 모두 배열 내부에 위치하는 경우 크기를 비교해서 리턴
  if (pt1 < nums1.length && pt2 < nums2.length)
    return nums1[pt1] < nums2[pt2] ? nums1[pt1++] : nums2[pt2++];
  // nums1의 포인터만 배열 내부에 위치하는 경우 nums1에서 리턴
  else if (pt1 < nums1.length) return nums1[pt1++];
  // nums2의 포인터만 배열 내부에 위치하는 경우 nums2에서 리턴
  else if (pt2 < nums2.length) return nums2[pt2++];
};
