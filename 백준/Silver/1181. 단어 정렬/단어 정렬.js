const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\n/);
const arr = Array.from(new Set(input));
const answer = [];
let maxLength = arr[1].length;

for (let i = 1; i < arr.length; i++) {
  if (maxLength < arr[i].length) {
    maxLength = arr[i].length;
  }
}

for (let i = 1; i <= maxLength; i++) {
  const temp = [];

  for (let j = 1; j < arr.length; j++) {
    if (arr[j].length === i) {
      temp.push(arr[j]);
    }
  }

  if (temp.length >= 1) {
    answer.push(temp.sort());
  }
}
answer.flat().forEach((el) => console.log(el));
