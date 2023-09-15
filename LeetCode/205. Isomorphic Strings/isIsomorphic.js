/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const sHashMap = new Map();
  const tHashMap = new Map();

  for (let i = 0; i < s.length; i++) {
    // 인덱스 비교
    //  각 문자에 해당하는 인덱스가 다르면 '동형'이 아님
    //  두 문자열의 문자가 동일한 순서로 등장하는지를 확인
    if (sHashMap.get(s[i]) !== tHashMap.get(t[i])) {
      return false;
    }
    sHashMap.set(s[i], i + 1);
    tHashMap.set(t[i], i + 1);
  }

  return true;
};

// 동형인 두 문자열: 'egg', 'add'
// 동형이 아닌 두 문자열: 'foo', 'bar'
