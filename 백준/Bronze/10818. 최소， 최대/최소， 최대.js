const input = require("fs").readFileSync("/dev/stdin").toString().split(/\n/);
const N = input[0] * 1;
const arr = input[1].split(" ").map(Number);
const min = Math.min(...arr);
const max = Math.max(...arr);

console.log(min + " " + max);
