/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  // letters 선형 접근
  for (const letter of letters) {
    // letter가 target보다 사전적으로 크다면 곧바로 letter 리턴
    if (letter > target) return letter;
  }

  // letters에서 target보다 사전적으로 큰 문자를 찾을 수 없으면 첫 번째 문자 리턴
  return letters[0];
};
