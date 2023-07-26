/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    // return true if s is a subsequence of t, or false otherwise
    // s = "abc", t = "ahbgdc" -> true
    // s = "axc", t = "ahbgdc" -> false

    let sIndex = 0;

    for (let i = 0; i < t.length; i++) {
        if (s[sIndex] === t[i]) {
            sIndex++;
        }
    }

    return sIndex === s.length;
};

// while 버전
var isSubsequence2 = function (s, t) {
    let sIndex = 0;
    let tIndex = 0;

    while (tIndex < t.length) {
        if (s[sIndex] === t[tIndex]) {
            sIndex++;
        }
        tIndex++;
    }

    return sIndex === s.length;
};

// console.log(isSubsequence("abc", "ahbgdc"));
// console.log(isSubsequence("axc", "ahbgdc"));
// console.log(isSubsequence("ab", "baab"));
// console.log(isSubsequence("", "ahbgdc"));

console.log(isSubsequence2("abc", "ahbgdc"));
console.log(isSubsequence2("axc", "ahbgdc"));
console.log(isSubsequence2("ab", "baab"));
console.log(isSubsequence2("", "ahbgdc"));
