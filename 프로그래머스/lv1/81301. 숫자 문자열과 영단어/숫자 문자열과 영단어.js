function solution(s) {
    if (!Number.isNaN(s * 1)) return s * 1;
    
    const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    numbers.forEach((el, idx) => {
        s = s.replaceAll(el, idx);
    });
    return s * 1;
}