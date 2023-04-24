function solution(start, end) {
    const answer = new Array(start - end + 1).fill(start);
    return answer.map((el, i) => el - i);
}