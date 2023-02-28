function solution(n, words) {
  const wordObj = {};
  let turn = 0;
  
  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    wordObj[currentWord] = (wordObj[currentWord] || 0) + 1;
    
    // 중복된 단어로 끝말잇기한 경우
    if (wordObj[currentWord] === 2) {
      turn = i;
      break;
    }
    
    let nextWord = '';
    if (i !== words.length - 1)  {
      nextWord = words[i + 1];
    }
    // 끝말잇기가 틀린 경우
    if (currentWord[currentWord.length - 1] !== nextWord[0]) {
      if (i === words.length - 1) {
        return [0, 0];
      } else {
        turn = i + 1;
        break;
      }
    }
  }
  
  // 중복된 단어를 말한 경우
  if (turn !== 0) {
    console.log(turn);
    return [turn % n + 1, Math.trunc(turn / n) + 1];
  }
}