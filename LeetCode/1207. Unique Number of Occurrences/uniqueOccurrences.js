/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  // return true if the number of occurrences of each value in the array is unique
  //    or false otherwise

  const countHash = {}; // arr에서 등장한 num의 개수 저장
  const countedHash = {}; // count 등장 여부 저장

  // arr에서 등장한 num 개수 저장
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    countHash[num] = countHash[num] ?? 0;
    countHash[num]++;
  }

  // count 등장 여부 확인
  for (const num in countHash) {
    // 만약 이미 등장했다면 false 리턴
    if (countedHash[countHash[num]]) {
      return false;
    }

    // count를 키로, true를 값으로 저장하여 등장 여부 저장
    countedHash[countHash[num]] = true;
  }

  return true;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
console.log(uniqueOccurrences([1, 2]));
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
