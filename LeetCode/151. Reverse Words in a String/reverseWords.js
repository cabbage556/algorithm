/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    // return s
    //     .trim()
    //     .split(" ")
    //     .filter((word) => word !== "")
    //     .reverse()
    //     .join(" ");

    let reversedWords = "";
    s = s.trim().split(" ");

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === "") {
            continue;
        }

        reversedWords += s[i] + " ";
    }
    return reversedWords.trimEnd();
};

reverseWords("  hello world  ");
reverseWords("a good   example");
