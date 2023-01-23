function solution(s) {
    const answer = s.toLowerCase().split(" ").map(word => {
        if (word === "") return "";
        return word[0].toUpperCase() + word.slice(1, word.length);
    }).join(" ");
    
    
    return answer;
}