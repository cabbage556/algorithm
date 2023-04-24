const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/);
let answer = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] !== "") {
    answer++;
  }
}

console.log(answer);
