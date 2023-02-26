const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")[0];

if (input === "A+") console.log((4.3).toFixed(1));
else if (input === "A0") console.log((4.0).toFixed(1));
else if (input === "A-") console.log((3.7).toFixed(1));
else if (input === "B+") console.log((3.3).toFixed(1));
else if (input === "B0") console.log((3.0).toFixed(1));
else if (input === "B-") console.log((2.7).toFixed(1));
else if (input === "C+") console.log((2.3).toFixed(1));
else if (input === "C0") console.log((2.0).toFixed(1));
else if (input === "C-") console.log((1.7).toFixed(1));
else if (input === "D+") console.log((1.3).toFixed(1));
else if (input === "D0") console.log((1.0).toFixed(1));
else if (input === "D-") console.log((0.7).toFixed(1));
else if (input === "F") console.log((0.0).toFixed(1));
