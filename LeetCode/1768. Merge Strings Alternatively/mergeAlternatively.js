/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    // merge the strings by adding letters in alternating order, starting with word1
    const loopCount =
        word1.length >= word2.length ? word1.length : word2.length;
    let mergedString = "";

    for (let i = 0; i < loopCount; i++) {
        if (word1[i] !== undefined) {
            mergedString += word1[i];
        }
        if (word2[i] !== undefined) {
            mergedString += word2[i];
        }
    }

    return mergedString;
};

// mergeAlternately("abc", "pqr");
// mergeAlternately("ab", "pqrs");
mergeAlternately("abcd", "pq");
