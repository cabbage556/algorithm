const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, X] = input[0].split(" ");
const A = input[1].split(" ");
const answer = [];

for (let i = 0; i < N; i++) {
  if (A[i] * 1 < X) {
    answer.push(A[i]);
  }
}

console.log(answer.join(" "));
