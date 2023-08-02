/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    // return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
    let left = 0,
        zeros = 0,
        maxLength = 0;

    // 오른쪽 포인터 1씩 증가
    for (let right = 0; right < nums.length; right++) {
        // 오른쪽 포인터의 값이 0이면 0의 개수 1 증가
        if (nums[right] === 0) {
            zeros++;
        }

        // 0의 개수가 k개보다 큰 경우
        while (zeros > k) {
            // 왼쪽 포인터의 값이 0이면 0의 개수 1 감소
            if (nums[left] === 0) {
                zeros--;
            }
            // 윈도우 시작점 1씩 증가
            left++;
        }

        // 윈도우 크기(right - left + 1)와 maxLength의 최대값을 계산해서 maxLength 업데이트
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
console.log(
    longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
);
