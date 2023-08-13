var RecentCounter = function () {
  // initializes the counter with zero recent requests
  this.recentReqeusts = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  // adds a new request at time t, where t represents some time in milliseconds
  // returns the number of requests that has happened in the past 3000 milliseconds(including the new request)
  //    return the number of requests that have happened in the inclusive range [t-3000, t]
  this.recentReqeusts.push(t);

  return this.recentReqeusts.filter((request) => {
    const currentRequest = this.recentReqeusts[this.recentReqeusts.length - 1];
    if (request >= currentRequest - 3000 && request <= currentRequest) {
      return true;
    } else {
      return false;
    }
  }).length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

var obj = new RecentCounter();
console.log(obj.ping(1));
console.log(obj.ping(100));
console.log(obj.ping(3001));
console.log(obj.ping(3002));
