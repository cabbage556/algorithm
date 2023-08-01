/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    // gain[i] is the net gain in altitude between i and i + 1
    // return the highest altitude of a point
    let highestAltitude = 0,
        currentAltitude = 0;

    for (let i = 0; i < gain.length; i++) {
        // 현재 고도에 해당 지점에서의 고도 이득을 더해 고도 계산 후 가장 높은 고도 얻기
        currentAltitude += gain[i];
        highestAltitude = Math.max(currentAltitude, highestAltitude);
    }

    return highestAltitude;
};

largestAltitude([-5, 1, 5, 0, -7]);
largestAltitude([-4, -3, -2, -1, 4, 3, 2]);
