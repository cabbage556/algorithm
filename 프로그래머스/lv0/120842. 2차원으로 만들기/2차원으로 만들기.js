function solution(num_list, n) {
    const answer = [];
    let temp = [];

    for (let i = 0; i < num_list.length; i++) {
        temp.push(num_list[i]);

        if (i % n === n - 1) {
          answer.push(temp);
          temp = [];
        }
    }

    return answer;
}