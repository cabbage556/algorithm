const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\n/);
const english = "abcdefghijklmnopqrstuvwxyz";
const L = input[0] * 1;
const str = input[1];
const r = 31n;
const M = 1234567891n;
let answer = 0n;

for (let i = 0; i < L; i++) {
  const index = BigInt(english.indexOf(str[i]) + 1);
  let temp = 1n;
  let j = i;

  while (j >= 1) {
    temp *= r;
    temp %= M;
    j--;
  }

  answer += (index * temp) % M;
}

console.log(answer + "");
