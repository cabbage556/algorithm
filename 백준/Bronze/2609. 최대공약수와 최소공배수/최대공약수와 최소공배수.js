const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map(Number);
const [a, b] = input;
let gcd = 1;

for (let i = 1; i <= b; i++) {
  if (b % i === 0 && a % i === 0) {
    gcd = i;
  }
}

console.log(`${gcd}\n${(a * b) / gcd}`);
