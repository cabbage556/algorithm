const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

for (const char of alphabet) {
    if (input.indexOf(char) !== -1) console.log(input.indexOf(char));
    else console.log("-1");
}