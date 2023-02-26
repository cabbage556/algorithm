const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);
const arr = new Array(30).fill(1).map((el, i) => el + i);
let answer = "";

for (let i = 0; i < arr.length; i++) {
  if (input.indexOf(arr[i]) === -1) {
    answer += `${i + 1}\n`;
  }
}

console.log(answer.slice(0, answer.length));
