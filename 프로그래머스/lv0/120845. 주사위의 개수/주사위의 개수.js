function solution(box, n) {
    let answer = 1;
    for (const corner of box)
        answer *= Math.floor(corner / n);
    return answer;
}