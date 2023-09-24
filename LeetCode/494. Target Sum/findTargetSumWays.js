/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  const explore = function (sum, depth) {
    if (depth === nums.length) {
      if (sum === target) {
        return 1;
      }
      return 0;
    }
    return (
      explore(sum + nums[depth], depth + 1) +
      explore(sum - nums[depth], depth + 1)
    );
  };

  return explore(0, 0);
};
