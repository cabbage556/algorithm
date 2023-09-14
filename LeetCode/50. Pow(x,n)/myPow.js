/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  // base case
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return x;
  }
  if (n === -1) {
    return 1 / x;
  }

  if (n % 2 === 0) {
    const pow = myPow(x, n / 2);
    return pow * pow;
  } else {
    return x * myPow(x, n - 1);
  }
};

// 2^10인 경우
//  myPow(2, 10)
//    pow: myPow(2, 5) = 2^5
//    return pow * pow = 2^5 * 2^5 = 2^10
//  myPow(2, 5)
//    return 2 * myPow(2, 4) = 2 * 2^4 = 2^5
//  myPow(2, 4)
//    pow: myPow(2, 2) = 2^2
//    return pow * pow = 2^4
//  myPow(2, 2)
//    pow: myPow(2, 1) = 2
//    return pow * pow = 2^2
//  myPow(2, 1)
//    return 2 * myPow(2, 0) -> 2 * 1 -> 2
//  myPow(2, 0)
//    return 1

// 2^-3인 경우
//  myPow(2, -3)
//    return 2 * myPow(2, -4) = 2 * 2^-4 = 2^-3
//  myPow(2, -4)
//    pow: myPow(2, -2) = 2^-2
//    return pow * pow = 2^-4
//  myPow(2, -2)
//    pow: myPow(2, -1) = 1 / 2 = 2^-1
//    return pow * pow = 2^-2
//  myPow(2, -1)
//    return 1 / 2
