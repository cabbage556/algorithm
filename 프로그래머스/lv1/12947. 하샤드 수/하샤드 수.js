function solution(x) {
    const sum = (x + '').split("").reduce(((acc, cur) => (acc * 1) + (cur * 1)), 0);
    
    console.log(sum);
    
    return x % sum === 0 ? true : false;
}