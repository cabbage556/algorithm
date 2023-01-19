const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
const N = input * 1;
let str = '';

for (let i = 0; i < N; i++) {
    for (let j = 0; j <= i; j++) {
        str += '*';
    }
    str += '\n';
}

console.log(str);