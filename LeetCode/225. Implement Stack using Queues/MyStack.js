var MyStack = function () {
  this.queue1 = []; // 실제로 데이터를 저장하고 리턴하는 큐
  this.queue2 = []; // 데이터를 잠시 저장하는 큐
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  // queue1에 저장된 데이터를 queue2로 이동(순서는 그대로 유지)
  while (this.queue1[0]) {
    this.queue2.push(this.queue1.shift());
  }

  // 입력 데이터를 queue1 가장 앞에 푸쉬
  this.queue1.push(x);

  // queue2에 임시 저장된 데이터를 다시 queue1에 푸쉬
  while (this.queue2[0]) {
    this.queue1.push(this.queue2.shift());
  }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  // queue1 가장 앞에 저장된 데이터 리턴
  return this.queue1.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  // queue1의 가장 앞을 스택의 가장 위로 가정
  return this.queue1[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue1.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
