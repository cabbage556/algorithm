var MyHashMap = function () {
  this.size = 10 ** 6;
  this.map = new Array(this.size).fill(null);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  // inserts a (key, value) pair into the HashMap
  // If the key already exists in the map, update the corresponding value
  this.map[key] = value;
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  // returns the value to which the specified key is mapped,
  // or -1 if this map contains no mapping for the key
  const value = this.map[key];
  return value !== null ? value : -1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  // removes the key and its corresponding value if the map contains the mapping for the key
  this.map[key] = null;
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
