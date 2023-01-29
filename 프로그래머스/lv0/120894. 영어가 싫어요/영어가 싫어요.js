function solution(numbers) {
    const numberArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    numberArr.forEach((el, idx) => {
        numbers = numbers.replaceAll(numberArr[idx], idx);
    });
    return numbers * 1;
}