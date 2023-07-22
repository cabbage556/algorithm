/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    if (flowerbed.length === 1 && flowerbed[0] === 0) {
        if (n === 1) {
            return true;
        }
    }

    for (let i = 0; i < flowerbed.length; i++) {
        if (n === 0) {
            break;
        }

        if (i === 0) {
            if (flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
                flowerbed[i] = 1;
                n--;
                continue;
            }
        }

        if (i === flowerbed.length - 1) {
            if (flowerbed[i] === 0 && flowerbed[i - 1] === 0) {
                n--;
                break;
            }
        }

        if (flowerbed[i] === 0) {
            if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
                flowerbed[i] = 1;
                n--;
            }
        }
    }

    return n === 0;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2));
console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1));
console.log(canPlaceFlowers([0], 1));
