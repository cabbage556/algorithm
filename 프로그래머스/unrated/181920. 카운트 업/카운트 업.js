function solution(start, end) {
    const answer = new Array(end - start + 1).fill(start);
    return answer.map((el, i) => el + i);
}