/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  function reverse(index, s) {
    if (index >= s.length / 2) {
      return;
    }
    const reverseIndex = s.length - index - 1;
    [s[index], s[reverseIndex]] = [s[reverseIndex], s[index]];
    reverse(index + 1, s);
  }

  reverse(0, s);
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["H", "a", "n", "n", "a", "h"]));
