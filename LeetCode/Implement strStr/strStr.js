/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] !== needle[0]) {
      continue;
    }

    let isSame = true;
    for (let j = 1; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        isSame = false;
        break;
      }
    }

    if (isSame) {
      return i;
    }
  }

  return -1;
};

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));
