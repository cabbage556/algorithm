var RandomizedSet = function () {
  this.set = new Set();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  // insert an item val into the set if not present
  // return true if the item was present, false otherwise
  if (this.set.has(val)) {
    return false;
  }

  this.set.add(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  // remove an item val from the set if present
  // return true if the item was present, false otherwise
  if (this.set.has(val)) {
    this.set.delete(val);
    return true;
  }

  return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  // return a random element from the current set of elements
  // each element must have the same probability of being returned
  const elements = Array.from(this.set);
  const randomIndex = Math.floor(Math.random() * elements.length);
  return elements[randomIndex];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
