/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  // return true if word1 and word2 are close, and false otherwise

  if (word1.length !== word2.length) {
    return false;
  }

  const word1Hash = {};
  const word2Hash = {};

  // word1의 문자 개수 계산
  for (const char of word1) {
    word1Hash[char] = word1Hash[char] ?? 0;
    word1Hash[char]++;
  }
  // word2의 문자 개수 계산
  for (const char of word2) {
    // word1에 없는 문자를 가지고 있다면 false 리턴
    if (!word1Hash[char]) {
      return false;
    }

    word2Hash[char] = word2Hash[char] ?? 0;
    word2Hash[char]++;
  }

  // 각 단어의 문자 개수 배열을 정렬
  const word1HashValues = Object.values(word1Hash).sort();
  const word2HashValues = Object.values(word2Hash).sort();

  // 문자 개수가 다르다면 두 단어가 같아질 수 없음
  for (let i = 0; i < word1HashValues.length; i++) {
    if (word1HashValues[i] !== word2HashValues[i]) {
      return false;
    }
  }

  return true;
};

console.log(closeStrings("abc", "bca"));
console.log(closeStrings("a", "aa"));
console.log(closeStrings("aa", "ad"));
console.log(closeStrings("cabbba", "abbccc"));
console.log(closeStrings("abbzzca", "babzzcz"));
console.log(closeStrings("aaabbbbccddeeeeefffff", "aaaaabbcccdddeeeeffff"));
