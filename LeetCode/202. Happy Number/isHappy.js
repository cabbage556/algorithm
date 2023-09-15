/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const set = new Set();

  while (true) {
    let sum = 0;
    const nums = String(n).split("").map(Number);
    for (const num of nums) {
      const square = num ** 2;
      sum += square;
    }
    if (sum === 1) {
      return true;
    }
    if (set.has(sum)) {
      return false;
    }
    set.add(sum);
    n = sum;
  }
};
