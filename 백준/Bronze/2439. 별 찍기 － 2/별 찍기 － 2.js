const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\n/)
  .reduce(Number);
let answer = "";

for (let i = 0; i < input; i++) {
  let temp = "";

  for (let j = 0; j < input; j++) {
    if (j >= input - i - 1) {
      temp += "*";
    } else {
      temp += " ";
    }
  }
  answer += temp + "\n";
}

console.log(answer.slice(0, answer.length - 1));
