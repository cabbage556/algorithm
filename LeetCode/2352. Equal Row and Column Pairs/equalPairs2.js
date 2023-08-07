class TrieNode {
  constructor() {
    this.count = 0;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.trie = new TrieNode();
  }

  /**
   * @param {number[]} array
   */
  insert(array) {
    let trie = this.trie;

    for (const value of array) {
      if (!trie.children.has(value)) {
        trie.children.set(value, new TrieNode());
      }

      trie = trie.children.get(value);
    }

    trie.count++;
  }

  /**
   * @param {number[]} array
   * @returns {number}
   */
  search(array) {
    let trie = this.trie;

    for (const value of array) {
      if (trie.children.has(value)) {
        trie = trie.children.get(value);
      } else {
        return 0;
      }
    }
    return trie.count;
  }
}

/**
 * Trie
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs2 = function (grid) {
  const trie = new Trie();
  let count = 0;

  for (const row of grid) {
    trie.insert(row);
  }

  for (let col = 0; col < grid.length; col++) {
    const colArray = [];
    for (let row = 0; row < grid.length; row++) {
      colArray.push(grid[row][col]);
    }

    count += trie.search(colArray);
  }

  return count;
};

console.log(
  equalPairs2([
    [3, 2, 1],
    [1, 7, 6],
    [2, 7, 7],
  ])
);
console.log(
  equalPairs2([
    [3, 1, 2, 2],
    [1, 4, 4, 5],
    [2, 4, 2, 2],
    [2, 4, 2, 2],
  ])
);
