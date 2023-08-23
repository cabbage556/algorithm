/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let right = s.length - 1;

  for (let left = 0; left < right; left++) {
    [s[left], s[right]] = [s[right], s[left]];
    right--;
  }
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["H", "a", "n", "n", "a", "h"]));
