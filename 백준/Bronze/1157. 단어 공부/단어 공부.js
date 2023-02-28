const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .toUpperCase();
const inputLength = input.length;
const strObj = {};

for (let i = 0; i < inputLength; i++) {
  strObj[input[i]] = (strObj[input[i]] || 0) + 1;
}

const answer = [];
const max = Math.max(...Object.values(strObj));

for (const key in strObj) {
  if (strObj[key] === max) {
    answer.push(key);
  }
}

if (answer.length >= 2) {
  console.log("?");
} else {
  console.log(answer.at(0));
}
