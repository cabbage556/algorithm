var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
  this.head = -1;
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  // stack1에 데이터를 LIFO 순서로 추가
  if (this.stack1.length === 0) this.head = x;
  this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  // stack2가 비어 있는 경우 stack1의 모든 데이터를 꺼내어 stack2에 데이터를 넣음
  if (this.stack2.length === 0) {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
  }
  // stack2의 마지막 데이터 리턴
  return this.stack2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  // stack2가 비어 있다면 head 값을 리턴
  // stack2가 비어 있지 않다면 stack2의 마지막 값 리턴
  return this.stack2.length === 0
    ? this.head
    : this.stack2[this.stack2.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack1.length === 0 && this.stack2.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
