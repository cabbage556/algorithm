/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  // Remove the closest non-star character to its left, as well as remove the star itself.
  // Return the string after all stars have been removed.
  const remainsAfterRemoving = [];

  for (const char of s) {
    if (char === "*") {
      remainsAfterRemoving.pop();
    } else {
      remainsAfterRemoving.push(char);
    }
  }

  return remainsAfterRemoving.join("");
};

console.log(removeStars("leet**cod*e"));
console.log(removeStars("erase*****"));
