/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const hashMap = new Map();
  for (let i = 0; i < strs.length; i++) {
    const sortedStr = strs[i].split("").sort().join("");
    const group = hashMap.get(sortedStr) ?? null;
    if (group !== null) {
      group.push(strs[i]);
    } else {
      hashMap.set(sortedStr, [strs[i]]);
    }
  }

  return Array.from(hashMap.values());
};
