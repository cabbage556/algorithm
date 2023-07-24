/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    // return true if there exists a triple of indices i, j, k such that i < j < k and nums[i] < nums[j] < nums[k]
    // if no such indices exists, return false
    // Follow up: Could you implement a solution that runs in O(n) time complexity and O(1) space complexity?
    let firstNum = Infinity;
    let secondNum = Infinity;

    for (const currentNum of nums) {
        // firstNum < secondNum < currentNum
        if (currentNum > secondNum && currentNum > firstNum) {
            return true;
        }

        // 가장 작은 값은 항상 firstNum에 저장
        // currentNum이 firstNum보다 큰 경우에는 secondNum에 저장
        if (currentNum > firstNum) {
            secondNum = currentNum;
        } else {
            firstNum = currentNum;
        }
    }

    return false;
};

console.log(increasingTriplet([1, 2, 3, 4, 5]));
console.log(increasingTriplet([5, 4, 3, 2, 1]));
console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));
console.log(increasingTriplet([2, 2, 5, 3, 2, 4, 0, 1, 7]));
console.log(increasingTriplet([6, 7, 1, 2]));
console.log(increasingTriplet([20, 100, 10, 12, 5, 13]));
