/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // return true if x is a palindrome, and false otherwise
  if (x < 0) {
    return false;
  }

  x = String(x).split("");

  for (let i = 0; i < x.length / 2; i++) {
    if (x[i] !== x[x.length - i - 1]) {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
