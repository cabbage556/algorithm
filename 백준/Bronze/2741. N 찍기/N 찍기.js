const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
const N = input * 1;
const arr = [];

for (let i = 1; i <= N; i++) {
    arr.push(i);
}

console.log(arr.join("\n"));