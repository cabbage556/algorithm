/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];

  for (const char of s) {
    if (char !== "]") {
      stack.push(char);
      continue;
    }

    let current = stack.pop();
    let str = "";
    while (current !== "[") {
      str = current + str;
      current = stack.pop();
    }

    let num = "";
    current = stack.pop();
    while (!Number.isNaN(Number(current))) {
      num = current + num;
      current = stack.pop();
    }
    if (current) {
      stack.push(current);
    }
    stack.push(str.repeat(Number(num)));
  }

  return stack.join("");
};

console.log(decodeString("3[a]2[bc]"));
console.log(decodeString("3[a2[c]]"));
console.log(decodeString("2[abc]3[cd]ef"));
