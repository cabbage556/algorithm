/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const hashMap = new Map();
  for (let i = 0; i < s.length; i++) {
    let str = "";
    for (let j = i; j < s.length; j++) {
      str += s[j];
      hashMap.set(str, j - i);
    }
  }

  let last = 0;
  for (const [str, length] of hashMap) {
    for (let i = 0; i < str.length; i++) {
      if (i !== str.indexOf(str[i])) {
        break;
      }
      if (i === str.length - 1) {
        last = Math.max(last, length + 1);
      }
    }
  }

  return last;
};
