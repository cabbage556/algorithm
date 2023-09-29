/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  // x와 k개의 요소 중에서 첫 번째 요소를 가리키는 최하단 포인터를 구하고 k개만큼 자르기
  let left = 0;
  let right = arr.length - k;

  // 최하단 포인터 left 구하기
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    // mid + k에 위치한 요소가 mid에 위치한 요소보다 x에 더 가까운 경우
    //    left 포인터 이동(left 포인터가 mid보다 커져야 함)
    if (arr[mid + k] - x < x - arr[mid]) left = mid + 1;
    // 그렇지 않으면 right 포인터 이동
    else right = mid;
  }

  // left부터 k개 자르기
  return arr.slice(left, left + k);
};
