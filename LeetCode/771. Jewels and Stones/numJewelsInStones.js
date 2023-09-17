/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const hashMap = new Map();

  // stones에 있는 jewel의 갯수 저장
  for (let i = 0; i < stones.length; i++) {
    hashMap.set(stones[i], (hashMap.get(stones[i]) ?? 0) + 1);
  }

  // jewels에 있는 jewel 갯수 계산
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    if (hashMap.has(jewels[i])) {
      count += hashMap.get(jewels[i]);
    }
  }
  return count;
};
