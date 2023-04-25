function solution(num_list, n) {
    return num_list.filter((el, i) => i % n === 0);
}