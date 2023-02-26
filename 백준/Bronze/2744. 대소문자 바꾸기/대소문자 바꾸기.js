const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")[0];
let answer = "";

for (const char of input) {
  char === char.toUpperCase()
    ? (answer += char.toLowerCase())
    : (answer += char.toUpperCase());
}

console.log(answer);
