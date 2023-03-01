const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\n/);

const N = input[0] * 1;
const maxScore = Math.max(...input[1].split(" ").map(Number));
const newScores = input[1]
  .split(" ")
  .map((el) => (Number(el) / maxScore) * 100);
let total = 0;

for (let i = 0; i < N; i++) {
  total += newScores[i];
}

console.log(total / N);
