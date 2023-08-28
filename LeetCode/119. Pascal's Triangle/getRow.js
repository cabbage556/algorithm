/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex === 0) {
    return [1];
  }
  if (rowIndex === 1) {
    return [1, 1];
  }

  let pascalRow = [1, 1]; // rowIndex = 1
  for (let i = 0; i < rowIndex - 1; i++) {
    let temp = [];
    for (let j = 0; j < pascalRow.length + 1; j++) {
      if (j === 0 || j === pascalRow.length) {
        temp.push(1);
        continue;
      }

      temp.push(pascalRow[j] + pascalRow[j - 1]);
    }

    pascalRow = temp;
  }

  return pascalRow;
};

console.log(getRow(2));
console.log(getRow(3));
console.log(getRow(4));
console.log(getRow(5));
