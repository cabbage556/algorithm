const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let sum = 0;
input.forEach(num => {
    sum += Number(num) * Number(num);
});
console.log(sum % 10);