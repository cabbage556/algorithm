const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\n/)
  .reduce(String);

let i = 1;
let answer = 0;

while (i <= input * 1) {
  let digit = (i + "").split("");
  let digitSum = 0;

  for (let j = 0; j < digit.length; j++) {
    digitSum += digit[j] * 1;
  }

  if (digit.join("") * 1 + digitSum === input * 1) {
    answer = i;
    break;
  }

  i++;
}

console.log(answer);
