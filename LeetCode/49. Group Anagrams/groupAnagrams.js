/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const hashMap = new Map();
  for (let i = 0; i < strs.length; i++) {
    // 해시 맵의 키를 정렬된 문자열로 사용
    const sortedStr = strs[i].split("").sort().join("");
    const group = hashMap.get(sortedStr) ?? null;
    if (group !== null) {
      // 같은 그룹의 문자열을 같은 배열에 추가
      group.push(strs[i]);
    } else {
      hashMap.set(sortedStr, [strs[i]]);
    }
  }

  // 그룹 배열 추가
  const groups = [];
  for (const [key, group] of hashMap) {
    groups.push([...group]);
  }
  return groups;
};
