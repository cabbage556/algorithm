const fs = require('fs');
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].split(' ')[0] * 1 + arr[i].split(' ')[1] * 1);
}