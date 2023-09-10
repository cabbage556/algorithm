const cache = new Map();

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  // memoization
  if (cache.has(n)) {
    return cache.get(n);
  }
  // base case
  if (n < 2) {
    return n;
  }

  // get fibonacci number
  const fibNum = fib(n - 1) + fib(n - 2);

  // save fibonacci number
  cache.set(n, fibNum);
  return fibNum;
};
