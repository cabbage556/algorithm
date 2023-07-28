/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    // nums: an integer array
    // k: an integer
    let ops = 0,
        left = 0,
        right = nums.length - 1;

    nums.sort((a, b) => a - b);

    while (left < right) {
        if (nums[left] + nums[right] < k) {
            left++;
        } else if (nums[left] + nums[right] > k) {
            right--;
        } else {
            left++;
            right--;
            ops++;
        }
    }

    return ops;
};

maxOperations([4, 3, 2, 1], 5);
