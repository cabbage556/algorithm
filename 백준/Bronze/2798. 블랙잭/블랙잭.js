const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\n/);
const [N, M] = input[0].split(" ").map(Number);
const cards = input[1].split(" ").map(Number);
let answer = 0;

cards.sort((a, b) => a - b);

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      if (
        cards[i] + cards[j] + cards[k] > answer &&
        cards[i] + cards[j] + cards[k] <= M
      ) {
        answer = cards[i] + cards[j] + cards[k];
      }
    }
  }
}

console.log(answer);
