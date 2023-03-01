const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\n/);
const english = "abcdefghijklmnopqrstuvwxyz";
const L = input[0] * 1;
const str = input[1];
let answer = 0n;

for (let i = 0; i < L; i++) {
  answer += BigInt((english.indexOf(str[i]) + 1) * Math.pow(31, i));
}

console.log((answer + "").slice(0));
