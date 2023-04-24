function solution(n, k) {
    const answer = new Array(Math.floor(n / k)).fill(k);
    return answer.map((el, i) => {
        return i === 0 ? el : el + k * i;
    });
}