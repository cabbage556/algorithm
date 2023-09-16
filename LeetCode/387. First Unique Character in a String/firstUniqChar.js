/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const hashMap = new Map();

  s.split("").forEach((char) => {
    const count = hashMap.get(char);
    if (!count) {
      hashMap.set(char, 1);
    } else {
      hashMap.set(char, count + 1);
    }
  });

  for (let i = 0; i < s.length; i++) {
    if (hashMap.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
};
