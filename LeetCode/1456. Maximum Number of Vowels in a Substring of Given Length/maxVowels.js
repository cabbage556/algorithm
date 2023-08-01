/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    // return the maximum number of vowel letters in any substring of s with length k
    // vowel letters in english: a, e, i, o, u
    const vowels = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true,
    };
    let vowelCount = 0,
        maximumNumberOfVowels = 0;

    // 첫 번째 윈도우
    for (let i = 0; i < k; i++) {
        vowelCount += vowels[s[i]] ? 1 : 0;
    }

    maximumNumberOfVowels = vowelCount;

    // 윈도우 한칸씩 이동
    for (let i = k; i < s.length; i++) {
        vowelCount += vowels[s[i]] ? 1 : 0; // 윈도우에 새롭게 추가하는 문자가 모음이면 +1
        vowelCount -= vowels[s[i - k]] ? 1 : 0; // 윈도우에서 제거하는 문자가 모음이면 -1

        // 최대값 업데이트
        if (vowelCount > maximumNumberOfVowels) {
            maximumNumberOfVowels = vowelCount;
        }
    }

    return maximumNumberOfVowels;
};

console.log(maxVowels("abciiidef", 3));
console.log(maxVowels("aeiou", 2));
console.log(maxVowels("leetcode", 3));
