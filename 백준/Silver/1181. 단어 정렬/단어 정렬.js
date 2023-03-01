const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\n/);
const arr = Array.from(new Set(input));
const wordObj = {};
const answer = [];

for (let i = 1; i < arr.length; i++) {
  wordObj[arr[i]] = arr[i].length;
}

const maxLength = Math.max(...Object.values(wordObj));
for (let i = 1; i <= maxLength; i++) {
  const temp = [];

  for (const word in wordObj) {
    if (wordObj[word] === i) {
      temp.push(word);
    }
  }

  if (temp.length >= 1) {
    answer.push(temp.sort());
  }
}

answer.flat().forEach((el) => console.log(el));
