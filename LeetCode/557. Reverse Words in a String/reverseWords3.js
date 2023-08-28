/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.split("");

  let lastSpace = -1;
  for (let i = 0; i <= s.length; i++) {
    if (s[i] === " " || i === s.length) {
      let left = lastSpace + 1;
      let right = i - 1;

      while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
      }
      lastSpace = i;
    }
  }
  return s.join("");
};

console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords("God Ding"));
