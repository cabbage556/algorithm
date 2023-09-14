var MyHashSet = function () {
  this.size = 10 ** 6;
  this.buckets = new Array(this.size).fill(null);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  // inserts the value key into the HashSet
  this.buckets[key] = key;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  // removes the value key in the HashSet
  // if the key does not exist in the HashSet, do nothing
  this.buckets[key] = null;
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  // return whether the value key exists in the HashSet or not
  return this.buckets[key] !== null ? true : false;
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

const hashSet = new MyHashSet();
hashSet.add(1);
console.log(hashSet);
hashSet.remove(1);
console.log(hashSet);
