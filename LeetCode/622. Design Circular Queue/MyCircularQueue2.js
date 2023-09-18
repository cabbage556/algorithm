/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  // initialize the object with the size of the queue to be k
  this.queue = new Array(k); // 고정 길이 배열
  this.head = -1; // 큐의 시작점 포인터
  this.tail = -1; // 큐의 끝점 포인터
  this.size = k; // 큐의 사이즈
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  // insert an element into the circular queue
  // return true if the operation is successful
  if (this.isFull()) {
    return false;
  }
  // 큐가 비어 있는 경우 head 포인터 초기화
  if (this.isEmpty()) {
    this.head = 0;
  }

  // tail 포인터 업데이트 후 값 추가
  this.tail = (this.tail + 1) % this.size;
  this.queue[this.tail] = value;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  // delete an element from the circular queue
  // return true if the operation is successful
  if (this.isEmpty()) {
    return false;
  }
  // head, tail 포인터가 같은 곳을 가리키는 경우
  //    큐에 하나의 원소만 존재하므로 head, tail 포인터 초기화하여 삭제(실제 삭제는 아님)
  if (this.head === this.tail) {
    this.head = -1;
    this.tail = -1;
    return true;
  }

  // head 포인터 업데이트
  this.head = (this.head + 1) % this.size;
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  // get the front item from the queue
  // if the queue is empty, return -1
  if (this.isEmpty()) {
    return -1;
  }
  return this.queue[this.head];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  // get the last item from the queue
  // if the queue is empty, return -1
  if (this.isEmpty()) {
    return -1;
  }
  return this.queue[this.tail];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  // check whether the circular queue is empty of not
  // deQueue 메서드에서 head, tail 포인터가 같은 곳을 가리키는 경우
  // 큐에 존재하는 하나의 원소를 삭제하기 위해 head 포인터가 -1로 초기화됨
  // 따라서 head 포인터가 -1인 경우 큐가 비어 있는 경우를 의미함
  return this.head === -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  // check whether the circular queue is full or not
  // tail 포인터가 head 포인터의 바로 뒤에 위치하면 큐가 가득 찬 경우를 의미함
  return (this.tail + 1) % this.size === this.head;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
