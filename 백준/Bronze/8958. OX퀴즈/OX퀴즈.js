const input = require("fs").readFileSync("/dev/stdin").toString().split(/\n/);
const T = input[0] * 1;
let answer = 0;

for (let i = 1; i <= T; i++) {
  answer = 0;
  let score = 0;
  for (let j = 0; j < input[i].length; j++) {
    input[i][j] === "O" ? score++ : (score = 0);
    answer += score;
  }
  console.log(answer);
}
