/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    // return an array 'answer' such that answer[i] is equal to the product of all the elements of 'nums' except nums[i]
    // must write an algorithm that runs in O(N) time and without using the division operation
    const prefix = []; // 왼쪽 원소들의 곱
    const suffix = []; // 오른쪽 원소들의 곱

    // prefix 계산
    for (let i = 0; i < nums.length; i++) {
        // i가 0인 경우 왼쪽 원소들이 없으므로 1을 할당
        if (i === 0) {
            prefix[i] = 1;
            continue;
        }

        prefix[i] = nums[i - 1] * prefix[i - 1];
    }

    // suffix 계산
    for (let i = nums.length - 1; i >= 0; i--) {
        // i가 마지막 원소인 경우 오른쪽 원소들이 없으므로 1을 할당
        if (i === nums.length - 1) {
            suffix[i] = 1;
            continue;
        }

        suffix[i] = nums[i + 1] * suffix[i + 1];
    }

    // 정답 계산
    const answer = [];
    for (let i = 0; i < nums.length; i++) {
        answer[i] = prefix[i] * suffix[i];
        if (!answer[i]) {
            answer[i] = 0;
        }
    }
    return answer;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
