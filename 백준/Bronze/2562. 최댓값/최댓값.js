const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);
let [max, maxIdx] = [0, 0];

for (let i = 0; i < input.length; i++) {
  if (max < input[i]) {
    max = input[i];
    maxIdx = i + 1;
  }
}

console.log(`${max}\n${maxIdx}`);
