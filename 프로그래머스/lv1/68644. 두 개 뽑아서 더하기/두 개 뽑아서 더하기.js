function solution(numbers) {
    const answer = [];

    while (numbers.length > 0) {
      const lastNum = numbers.pop();
      numbers.forEach(el => answer.push(lastNum + el));
    }

    return answer.filter((el, idx) => answer.indexOf(el) === idx).sort((a, b) => a - b)
}