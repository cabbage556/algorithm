/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  // duplicate each occurence of zero, shifting the remaining elements to the right
  let arrLength = arr.length;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      continue;
    }

    for (let j = arrLength - 1; j > i; j--) {
      arr[j] = arr[j - 1];
    }
    i++;
  }
};

duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]); // [1, 0, 0, 2, 3, 0, 0, 4]
