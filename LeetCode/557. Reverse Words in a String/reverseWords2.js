/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s += " ";

  let reverse = "";
  let left = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      continue;
    }

    left = i - 1;
    while (s[left] !== " ") {
      if (!s[left]) {
        break;
      }
      reverse += s[left];
      left--;
    }
    reverse += " ";
  }

  return reverse.trimEnd();
};

console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords("God Ding"));
