/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s += " ";

  let reverse = "";
  let temp = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      temp += s[i];
      continue;
    }

    for (let j = temp.length - 1; j >= 0; j--) {
      reverse += temp[j];
    }
    if (i !== s.length - 1) {
      reverse += " ";
    }
    temp = "";
  }

  return reverse;
};

console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords("God Ding"));
