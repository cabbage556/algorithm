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

// 브루트 포스 버전(추가 공간 사용)
var moveZeroes2 = function (nums) {
    let j = 0;
    const noneZeroes = new Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            noneZeroes[j++] = nums[i];
        }
    }

    // i가 j부터 시작
    for (let i = j; i < nums.length; i++) {
        // 인덱스 i부터 0 할당
        noneZeroes[i] = 0;
    }

    console.log(noneZeroes);
};

// 다른 버전(추가 공간을 사용하지 않음)
var moveZeroes3 = function (nums) {
    let noneZeroCount = 0;
    let length = nums.length;

    for (let i = 0; i < length; i++) {
        if (nums[i] !== 0) {
            nums[noneZeroCount++] = nums[i];
        }
    }

    for (let i = noneZeroCount; i < length; i++) {
        nums[i] = 0;
    }

    console.log(nums);
};

// moveZeroes([0, 1, 0, 3, 12]);
// moveZeroes([1, 3, 12, 0, 5]);

// moveZeroes2([0, 1, 0, 3, 12]);
// moveZeroes2([1, 3, 12, 0, 5]);

moveZeroes3([0, 1, 0, 3, 12]);
moveZeroes3([1, 3, 12, 0, 5]);
