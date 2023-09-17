/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const hashMap = new Map();
  let left = 0;
  let max = 0;

  for (let right = 0; right < s.length; right++) {
    // 중복된 문자라면 left 포인터 이동
    if (hashMap.has(s[right])) {
      left = Math.max(hashMap.get(s[right]) + 1, left);
    }
    // 문자 인덱스 업데이트
    hashMap.set(s[right], right);

    // 슬라이딩 윈도우의 최대 길이 계산
    max = Math.max(right - left + 1, max);
  }

  return max;
};
