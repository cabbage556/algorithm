const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const T = input[0] * 1;
const arr = input.slice(1, input.length);

for (let i = 0; i < T; i++) {
    console.log(arr[i][0] + arr[i][arr[i].length - 1]);
}
