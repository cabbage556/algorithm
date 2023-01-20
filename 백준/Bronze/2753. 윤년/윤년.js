const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
const year = input * 1;
let answer = 0;

if (year % 400 === 0) {
    answer = 1;
} else if (year % 100 === 0) {
    answer = 0;
} else if (year % 4 === 0) {
    answer = 1;
}

console.log(answer);