/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  // hash map
  const map = new Map();
  const result = [];

  for (let i = 1; i <= nums.length; i++) {
    map.set(i, false);
  }

  for (const num of nums) {
    if (map.has(num)) {
      map.set(num, true);
    }
  }

  map.forEach((value, key) => {
    if (!value) {
      result.push(key);
    }
  });

  return result;
};

console.log(findDisappearedNumbers([4, 2, 3, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));
