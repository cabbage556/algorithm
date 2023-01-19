const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
const N = input * 1;

for (let i = 1; i <= 9; i++) {
    console.log(`${N} * ${i} = ${N * i}`);
}