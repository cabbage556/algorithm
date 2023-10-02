/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const result = [];

  // nums1 길이가 더 크면 nums1에 대해 이진 탐색
  if (nums1.length > nums2.length) {
    // 이진 탐색 전처리: 정렬
    nums1.sort((a, b) => a - b);
    for (const num of nums2) {
      // num이 nums1에 포함된다면 결과 배열에 추가
      if (binarySearch(nums1, num)) result.push(num);
    }
  }
  // nums2 길이가 더 크면 nums2에 대해 이진 탐색
  else {
    // 이진 탐색 전처리: 정렬
    nums2.sort((a, b) => a - b);
    for (const num of nums1) {
      // num이 nums2에 포함된다면 결과 배열에 추가
      if (binarySearch(nums2, num)) result.push(num);
    }
  }
  return result;
};

// 이진 탐색 함수
var binarySearch = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  // 이진 탐색
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    // 중앙값이 target과 같으면 mid에 위치한 요소 1개 제거 후 true 리턴
    //    중복값의 최대 갯수를 넘어가지 않도록 요소 1개를 제거함
    if (nums[mid] === target) {
      nums.splice(mid, 1);
      return true;
    } else if (nums[mid] > target) right = mid - 1;
    else if (nums[mid] < target) left = mid + 1;
  }
};
