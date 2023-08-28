/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 1) {
    return [[1]];
  }

  const prevs = generate(numRows - 1);
  const lastPrev = prevs.at(-1);
  const pascalRow = [1];
  for (let i = 1; i < numRows - 1; i++) {
    pascalRow[i] = lastPrev[i - 1] + lastPrev[i];
  }
  pascalRow[pascalRow.length] = 1;

  prevs.push(pascalRow);

  return prevs;
};

console.log(generate(1));
console.log(generate(2));
console.log(generate(3));
console.log(generate(4));
console.log(generate(5));
