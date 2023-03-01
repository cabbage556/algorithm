const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map(Number);
const [x, y, w, h] = input;
let xMinDistance = w - x > x ? x : w - x;
let yMinDistance = h - y > y ? y : h - y;

if (xMinDistance >= yMinDistance) {
  console.log(yMinDistance);
} else {
  console.log(xMinDistance);
}
