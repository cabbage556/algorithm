/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1;
    let right = n;
    while (left < right) {
      // 중앙값에 해당하는 버전 이상 확인
      const mid = left + Math.floor((right - left) / 2);
      const isBad = isBadVersion(mid);

      // 중앙값 버전에 이상이 있으면 right를 mid로 이동시켜서 중앙값보다 앞에 있는 값에 해당하는 버전에 이상이 있는지 확인
      if (isBad) right = mid;
      // 중앙값 버전에 이상이 없으면 중앙값까지의 버전에 이상이 없다는 의미이므로 left를 mid + 1로 할당
      else left = mid + 1;
    }

    // 후처리
    // left와 right가 같으면 탐색이 종료되므로 left에 대한 값 다시 한번 확인
    if (isBadVersion(left)) return left;
  };
};
