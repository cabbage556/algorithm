var MinStack = function () {
  this.data = new Array(); // 스택
  this.min = Infinity; // 스택의 최솟값
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  // 최솟값 업데이트 후 스택에 추가
  this.min = Math.min(this.min, val);
  this.data.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  // 스택 팝
  const popped = this.data.pop();

  // 스택에서 제거한 값이 최솟값인 경우 최솟값 업데이트
  if (this.min === popped) {
    this.min = Math.min(...this.data);
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  // 배열 길이를 사용하여 스택 최상위 요소 리턴
  return this.data[this.data.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  // 스택의 최솟값 리턴
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
