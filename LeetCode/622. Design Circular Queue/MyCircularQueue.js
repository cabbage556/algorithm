/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  // initialize the object with the size of the queue to be k
  this.queue = new Array(k); // 고정 길이 배열의 순환 큐(circular queue)
  this.head = -1; // 큐의 시작 지점 포인터
  this.tail = -1; // 큐의 마지막 지점 포인터
  this.size = 0; // 큐의 사이즈(큐에 들어 있는 원소 갯수)
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  // insert an element into the circular queue
  // return true if the operation is successful

  // 큐가 가득찬 경우 추가하지 않음
  if (this.isFull()) {
    return false;
  }
  // 큐가 비어 있는 경우 head, tail 포인터 초기화
  if (this.isEmpty()) {
    this.head = 0;
    this.tail = -1;
  }

  // tail 포인터 업데이트
  this.tail++;
  if (this.tail >= this.queue.length) {
    this.tail = 0;
  }
  // tail 포인터가 가리키는 곳에 원소 추가 후 큐 사이즈 업데이트
  this.queue[this.tail] = value;
  this.size++;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  // delete an element from the circular queue
  // return true if the operation is successful

  // 큐가 비어 있는 경우 디큐하지 않음
  if (this.isEmpty()) {
    return false;
  }

  // head 포인터가 가리키는 곳에 null 할당하여 삭제
  this.queue[this.head] = null;

  // head 포인터와 큐 사이즈 업데이트
  this.head++;
  if (this.head >= this.queue.length) {
    this.head = 0;
  }
  this.size--;
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  // get the front item from the queue
  // if the queue is empty, return -1

  // 큐가 비어 있는 경우 -1 리턴
  if (this.isEmpty()) {
    return -1;
  }
  // head 포인터가 가리키는 원소 리턴
  return this.queue[this.head];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  // get the last item from the queue
  // if the queue is empty, return -1

  // 큐가 비어 있는 경우 -1 리턴
  if (this.isEmpty()) {
    return -1;
  }
  // tail 포인터가 가리키는 원소 리턴
  return this.queue[this.tail];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  // check whether the circular queue is empty of not
  // 큐가 비어 있는지 확인
  return this.size === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  // check whether the circular queue is full or not
  // 큐가 가득 찼는지 확인
  return this.size === this.queue.length;
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
