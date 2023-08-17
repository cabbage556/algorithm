/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  let peak = 0;

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return false;
    }

    if (arr[i - 1] > arr[i] && arr[i] < arr[i + 1]) {
      return false;
    }

    if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
      peak++;
    }
  }

  return peak === 1;
};

// console.log(validMountainArray([0, 2, 3, 4, 5, 2, 1, 0]));
// console.log(validMountainArray([0, 2, 3, 3, 5, 2, 1, 0]));
// console.log(validMountainArray([3, 5, 5]));
// console.log(validMountainArray([0, 1, 2, 1, 2]));

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray2 = function (arr) {
  let currentIdx = 0;

  // 정상까지 오르기
  while (currentIdx + 1 < arr.length && arr[currentIdx] < arr[currentIdx + 1]) {
    currentIdx++;
  }

  // 정상이 첫 번째 인덱스거나 마지막 인덱스일 수 없음
  if (currentIdx === 0 || currentIdx === arr.length - 1) {
    return false;
  }

  // 내려오기
  while (currentIdx + 1 < arr.length && arr[currentIdx] > arr[currentIdx + 1]) {
    currentIdx++;
  }

  // 정상적으로 모두 내려오면 true, 아니면 false
  return currentIdx === arr.length - 1;
};

console.log(validMountainArray2([0, 2, 3, 4, 5, 2, 1, 0]));
console.log(validMountainArray2([0, 2, 3, 3, 5, 2, 1, 0]));
console.log(validMountainArray2([3, 5, 5]));
console.log(validMountainArray2([0, 1, 2, 1, 2]));
