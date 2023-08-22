/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const result = [];
  let maxLength = Math.max(a.length, b.length);
  let carry = 0;

  a = a.padStart(maxLength, "0");
  b = b.padStart(maxLength, "0");

  for (let i = maxLength - 1; i >= 0; i--) {
    const sum = a[i] * 1 + b[i] * 1 + carry;

    result[i] = sum;
    if (result[i] >= 2) {
      result[i] -= 2;
    }

    if (sum >= 2) {
      carry = 1;
    } else {
      carry = 0;
    }
  }

  if (carry === 1) {
    result.unshift(1);
  }

  return result.join("");
};

console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));
