const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = input[0] * 1;
const arr = input[1].split(" ");
const v = input[2] * 1;
let answer = 0;

for (let i = 0; i < N; i++) {
  if (arr[i] * 1 === v) {
    answer++;
  }
}

console.log(answer);
