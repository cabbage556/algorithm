/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let reversedString = "";
    const aeiouAEIOU = "aeiouAEIOU";
    const reversedVowels = s
        .split("")
        .filter((char) => aeiouAEIOU.includes(char))
        .reverse();
    let reversedVowelsIndex = 0;

    s.split("").forEach((char) => {
        if (!aeiouAEIOU.includes(char)) {
            reversedString += char;
        } else {
            reversedString += reversedVowels[reversedVowelsIndex++];
        }
    });

    return reversedString;
};

// reverseVowels("hello");
reverseVowels("leetcode");
