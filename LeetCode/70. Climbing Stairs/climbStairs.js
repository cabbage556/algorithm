const cache = new Map();

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // memoization
  if (cache.has(n)) {
    return cache.get(n);
  }
  // base case
  if (n <= 1) {
    return 1;
  }

  // 2 계단 이전까지의 오르는 횟수 + 1 계단 이전까지의 오르는 횟수
  const result = climbStairs(n - 2) + climbStairs(n - 1);

  // memoization
  cache.set(n, result);

  return result;
};
