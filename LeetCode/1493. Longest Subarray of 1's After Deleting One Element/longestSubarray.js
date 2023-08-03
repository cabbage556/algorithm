/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    // return the size of the longest non-empty subarray containing only 1's in the resulting array
    // return 0 if there is no such subarray
    let left = 0,
        zeros = 0,
        maxLength = 0;

    // 오른쪽 포인터 1씩 증가
    for (let right = 0; right < nums.length; right++) {
        // 오른쪽 포인터로 0의 개수 계산
        if (nums[right] === 0) {
            zeros++;
        }

        // 0의 개수가 2이면 왼쪽 포인터 이동
        //      0의 개수가 최대 1개인 슬라이딩 윈도우를 유지
        while (zeros === 2) {
            if (nums[left] === 0) {
                zeros--;
            }

            left++;
        }

        // (오른쪽 포인터 - 왼쪽 포인터)로 슬라이딩 윈도우의 최대 길이 계산
        maxLength = Math.max(right - left, maxLength);
    }

    return maxLength;
};

console.log(longestSubarray([1, 1, 0, 1]));
console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]));
console.log(longestSubarray([1, 1, 1]));
