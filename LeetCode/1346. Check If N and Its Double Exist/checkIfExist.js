/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j >= 0; j--) {
      if (i === j) {
        continue;
      }

      if (arr[i] === arr[j] * 2) {
        return true;
      }
    }
  }

  return false;
};

console.log(checkIfExist([10, 2, 5, 3]));
console.log(checkIfExist([3, 1, 7, 11]));
console.log(checkIfExist([7, 1, 14, 11]));

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist2 = function (arr) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i] / 2, i);
  }

  for (let j = 0; j < arr.length; j++) {
    if (map.has(arr[j]) && map.get(arr[j]) !== j) {
      return true;
    }
  }

  return false;
};

console.log(checkIfExist2([10, 2, 5, 3]));
console.log(checkIfExist2([3, 1, 7, 11]));
console.log(checkIfExist2([7, 1, 14, 11]));
