/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    // move all 0s to the end of nums while maintaining the relative order of the non-zero elements.
    // you must do this in-place without making a copy of the array.
    // [0, 1, 0, 3, 12] => [1, 3, 12, 0, 0]

    // 투 포인터
    let left = 0;
    let right = 0;

    // 우측 포인터 기준
    while (right < nums.length) {
        // 좌측 포인터의 값이 0이 아니면 투 포인터 1 증가
        if (nums[left] !== 0) {
            left++;
            right++;
        }
        // 좌측 포인터의 값이 0이면 우측 포인터의 값 확인
        else {
            // 우측 포인터의 값이 0이 아니면
            if (nums[right] !== 0) {
                // 좌측 포인터의 값과 교환
                let temp = nums[left];
                nums[left] = nums[right];
                nums[right] = temp;

                // 교환했으면 좌측 포인터 1 증가
                left++;
            }
            // 다음 값 확인을 위해 우측 포인터 1 증가
            right++;
        }
    }

    console.log(nums);
};

moveZeroes([0, 1, 0, 3, 12]);
moveZeroes([1, 3, 12, 0, 5]);
