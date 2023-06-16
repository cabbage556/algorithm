function solution(n, words) {
    const wordHashTable = {};
    
    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i];
        const player = i % n + 1;
        const turn = Math.floor(i / n) + 1;
        
        // 이전에 사용했던 단어를 사용하는 경우
        if (wordHashTable[currentWord]) {
            return [player, turn];
        } else {
            wordHashTable[currentWord] = true;
        }
        
        if (i === 0) {
            continue;
        }
        
        const prevWord = words[i - 1];
        // 앞사람이 말한 단어의 마지막 문자로 말하지 않은 경우
        if (prevWord[prevWord.length - 1] !== currentWord[0]) {
            return [player, turn];
        }
    }
    
    return [0, 0];
}