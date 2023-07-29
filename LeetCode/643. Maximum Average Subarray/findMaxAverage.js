/**
 * 투포인터 방식
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    // Find a contiguous subarray whose length is equal to k
    // that has the maximum average value and return this value
    let maximumSum = -Infinity,
        left = 0,
        right = k - 1;

    while (right < nums.length) {
        let subArraySum = 0,
            subIndex = left;

        while (subIndex <= right) {
            subArraySum += nums[subIndex++];
        }

        if (subArraySum > maximumSum) {
            maximumSum = subArraySum;
        }

        left++;
        right++;
    }

    return maximumSum / k;
};

// findMaxAverage([1, 12, -5, -6, 50, 3], 4);
// findMaxAverage([5], 1);
// findMaxAverage([-1], 1);

/**
 * Cumulative Sum 방식
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage2 = function (nums, k) {
    const sums = [nums[0]]; // i번째 인덱스: 0번 인덱스부터 i번 인덱스까지 더한 값
    for (let i = 1; i < nums.length; i++) {
        sums[i] = sums[i - 1] + nums[i];
    }

    // i부터 i+k까지의 합: sums[i] - sums[i - k] (k = 4인 경우)
    // sums[4] - sums[0] = (0~4까지의 합) - (0~0까지의 합) = 1~4 -> 1번 인덱스부터 4번 인덱스까지의 합
    // sums[5] - sums[1] = (0~5까지의 합) - (0~1까지의 합) = 2~5 -> 2번 인덱스부터 5번 인덱스까지의 합
    let maximumAvg = sums[k - 1] / k;
    for (let i = k; i < nums.length; i++) {
        maximumAvg = Math.max(maximumAvg, (sums[i] - sums[i - k]) / k);
    }

    return maximumAvg;
};

// findMaxAverage2([1, 12, -5, -6, 50, 3, -30, 25], 4);

/**
 * Sliding Window 방식
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage3 = function (nums, k) {
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    let maximumSum = sum;

    // i부터 i + k까지의 합 = x
    //      nums[0] + nums[1] + nums[2] + nums[3] = x
    // i + 1부터 i + k + 1까지의 합 = x + (nums[i + k + 1] - nums[i + 1])
    //      nums[1] + nums[2] + nums[3] + nums[4] = x + (nums[4] - nums[0])
    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k];
        maximumSum = Math.max(maximumSum, sum);
    }

    return maximumSum / k;
};

findMaxAverage3([1, 12, -5, -6, 50, 3, -30, 25], 4);
