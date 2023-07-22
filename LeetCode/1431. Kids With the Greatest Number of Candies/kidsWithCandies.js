/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    return candies.map((candy, i, candies) => {
        candies[i] += extraCandies;
        if (Math.max(...candies) === candies[i]) {
            candies[i] -= extraCandies;
            return true;
        }
        return false;
    });
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
console.log(kidsWithCandies([12, 1, 12], 10));
