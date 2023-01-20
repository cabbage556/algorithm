const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const A = input[0] * 1;
const B = input[1] * 1;

console.log(`${A + B}\n${A - B}\n${A * B}\n${Math.floor(A / B)}\n${A % B}`);