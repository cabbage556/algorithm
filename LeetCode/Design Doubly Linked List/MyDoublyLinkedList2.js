// 이중 연결 리스트 노드
function Node(val = 0, prev = null, next = null) {
  this.val = val;
  this.prev = prev;
  this.next = next;
}

// 이중 연결 리스트(tail 노드 포함)
function MyDoublyLinkedList() {
  this.head = null; // head 노드
  this.tail = null; // tail 노드
  this.length = 0;
}

// read at index
MyDoublyLinkedList.prototype.get = function (index) {
  if (index < 0 || this.length <= index) {
    return;
  }

  let current = this.head;
  let currentIndex = 0;
  while (currentIndex < index) {
    current = current.next;
    currentIndex++;
  }
  return current;
};

// add at head
MyDoublyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new Node(val);
  // head가 없는 경우
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
    this.length++;
    return;
  }
  // head만 있는 경우
  if (!this.head.next) {
    newNode.next = this.head;
    this.head.prev = newNode;
    this.tail = this.head;
    this.head = newNode;
    this.length++;
    return;
  }
  // 그 외의 경우
  newNode.next = this.head;
  this.head.prev = newNode;
  this.head = newNode;
  this.length++;
};

// add at tail
MyDoublyLinkedList.prototype.addAtTail = function (val) {
  // head가 없는 경우 head에 추가
  if (!this.head) {
    this.addAtHead(val);
    return;
  }

  // link new node with the tail node
  const newNode = new Node(val);
  const tailNode = this.tail;
  tailNode.next = newNode;
  newNode.prev = tailNode;
  this.tail = newNode;
  this.length++;
};

// add at index
MyDoublyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || this.length < index) {
    return;
  }
  // 첫 번째 인덱스에 추가하는 경우 head에 추가
  if (index === 0) {
    this.addAtHead(val);
    return;
  }
  // 마지막 인덱스에 추가하는 경우 tail에 추가
  if (index === this.length) {
    this.addAtTail(val);
    return;
  }
  // 그외의 경우
  const newNode = new Node(val);
  const nodeAtIndex = this.get(index);
  const prev = nodeAtIndex.prev;

  // link new node with prev and next
  newNode.prev = prev;
  newNode.next = nodeAtIndex;

  // re-link prev and next with new node
  prev.next = newNode;
  nodeAtIndex.prev = newNode;

  this.length++;
};

// delete at index
MyDoublyLinkedList.prototype.deleteAtIndex = function (index) {
  // get node at index
  const nodeAtIndex = this.get(index);
  if (!nodeAtIndex) {
    return;
  }

  const prev = nodeAtIndex.prev;
  const next = nodeAtIndex.next;

  // prev and next is null if the linked list contains one node
  if (!prev && !next) {
    this.head = null;
    this.tail = null;
    this.length--;
    return;
  }

  // prev is null when deleting the head
  if (!prev) {
    this.head = next;
    next.prev = null;
    this.length--;
    return;
  }

  // next is null when deleting the tail
  if (!next) {
    this.tail = prev;
    prev.next = null;
    this.length--;
    return;
  }

  prev.next = next;
  next.prev = prev;
  this.length--;
};

const doublyLinkedList = new MyDoublyLinkedList();

// add at head
doublyLinkedList.addAtHead(4);
doublyLinkedList.addAtHead(3);
doublyLinkedList.addAtHead(2);
doublyLinkedList.addAtHead(1);

// add at tail
doublyLinkedList.addAtTail(5);
doublyLinkedList.addAtTail(6);
doublyLinkedList.addAtTail(7);

// add at index
doublyLinkedList.addAtIndex(0, 0);
doublyLinkedList.addAtIndex(0, -1);

// delete at index
doublyLinkedList.deleteAtIndex(1);

console.log(doublyLinkedList);
let current = doublyLinkedList.head;
while (current) {
  console.log(current);
  current = current.next;
}
