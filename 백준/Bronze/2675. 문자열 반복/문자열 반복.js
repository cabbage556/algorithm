const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const T = input[0] * 1;
let answer = "";

for (let i = 1; i <= T; i++) {
  const [repeat, str] = input[i].split(" ");

  for (let j = 0; j < str.length; j++) {
    for (let k = 0; k < repeat; k++) {
      answer += str[j];
    }
  }

  answer += "\n";
}
console.log(answer.slice(0, answer.length - 1));
