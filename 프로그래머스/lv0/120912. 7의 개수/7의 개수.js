function solution(array) {
    let answer = 0;
    
    for (const element1 of array) {
        const temp = (element1 + "").split("");
        for (const element2 of temp) {
            if (element2 === "7") answer++;
        }
    }
    
    return answer;
}