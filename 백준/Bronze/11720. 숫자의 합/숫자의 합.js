const input = require("fs").readFileSync("/dev/stdin").toString().split(/\n/);
const N = input[0] * 1;
let answer = 0;

for (let i = 0; i < N; i++) {
  answer += input[1][i] * 1;
}

console.log(answer);
