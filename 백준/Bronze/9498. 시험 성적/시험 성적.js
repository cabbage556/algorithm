const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
const score = input * 1;
let answer = 'F';

if (score >= 90) answer = 'A';
else if (score >= 80) answer = 'B';
else if (score >= 70) answer = 'C';
else if (score >= 60) answer = 'D';

console.log(answer);