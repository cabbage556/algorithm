var RecentCounter = function () {
  this.recentReqeusts = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.recentReqeusts.push(t);

  // [t-3000,t] 범위에 포함된 요청만 리턴하므로 t-3000보다 작은 요청은 시프트
  while (this.recentReqeusts[0] < t - 3000) {
    this.recentReqeusts.shift();
  }

  return this.recentReqeusts.length;
};

const recentCounter = new RecentCounter();
console.log(recentCounter.ping(1));
console.log(recentCounter.ping(100));
console.log(recentCounter.ping(3001));
console.log(recentCounter.ping(3002));
