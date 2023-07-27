/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    // height: an integer array height of length n
    let maximumAmountWater = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const leftHeight = height[left];
        const rightHeight = height[right];
        const currentAmountWater =
            (right - left) *
            (leftHeight >= rightHeight ? rightHeight : leftHeight);
        maximumAmountWater = Math.max(maximumAmountWater, currentAmountWater);

        // 더 낮은 쪽을 가리키는 포인터를 이동하기
        if (leftHeight <= rightHeight) {
            left++;
        } else {
            right--;
        }
    }

    return maximumAmountWater;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 6, 8, 5]));
