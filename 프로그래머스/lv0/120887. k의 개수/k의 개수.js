function solution(i, j, k) {
    let answer = 0;
    for (let start = i; start <= j; start++) {
        const strings = (start + '').split('');

        for (const string of strings) {
            if (string === (k + ''))
                answer++;
        }
    }
    return answer;
}