/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex === 0) {
    return [1];
  }

  const prevPascalRow = getRow(rowIndex - 1);
  const pascalRow = [1];
  for (let i = 1; i < rowIndex; i++) {
    pascalRow[i] = prevPascalRow[i - 1] + prevPascalRow[i];
  }
  pascalRow[pascalRow.length] = 1;

  return pascalRow;
};

console.log(getRow(2));
console.log(getRow(3));
console.log(getRow(4));
console.log(getRow(5));
