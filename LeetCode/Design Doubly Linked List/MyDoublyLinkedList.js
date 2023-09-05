function Node(val, prev = null, next = null) {
  this.val = val;
  this.prev = prev;
  this.next = next;
}

function MyDoublyLinkedList() {
  this.head = null;
  this.length = 0; // the length of linked list
}

// read at index
MyDoublyLinkedList.prototype.get = function (index) {
  if (!this.head) {
    return null;
  }
  if (index < 0 || this.length <= index) {
    return null;
  }

  let current = this.head;
  let currentIndex = 0;
  while (currentIndex < index) {
    current = current.next;
    currentIndex++;
  }
  return current.val;
};

// add at head
MyDoublyLinkedList.prototype.addAtHead = function (val) {
  const node = new Node(val);
  if (!this.head) {
    this.head = node;
    this.length++;
    return;
  }

  node.next = this.head;
  this.head.prev = node;
  this.head = node;

  this.length++;
};

// add at tail
MyDoublyLinkedList.prototype.addAtTail = function (val) {
  const node = new Node(val);
  if (!this.head) {
    this.head = node;
    this.length++;
    return;
  }

  let current = this.head;
  while (current.next) {
    current = current.next;
  }

  current.next = node;
  node.prev = current;

  this.length++;
};

// add at index
MyDoublyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || this.length < index) {
    return;
  }
  if (index === 0) {
    this.addAtHead(val);
    return;
  }
  if (index === this.length) {
    this.addAtTail(val);
    return;
  }

  let current = this.head;
  let currentIndex = 0;
  while (currentIndex < index - 1) {
    current = current.next;
    currentIndex++;
  }

  const node = new Node(val);

  // link new node with prev and next
  node.prev = current;
  node.next = current.next;

  // re-link prev and next with new node
  current.next = node;
  node.next.prev = node;

  this.length++;
};

// delete at index
MyDoublyLinkedList.prototype.deleteAtIndex = function (index) {
  if (!this.head) {
    return;
  }
  if (index < 0 || this.length <= index) {
    return;
  }

  let current = this.head;
  let currentIndex = 0;
  while (currentIndex < index) {
    current = current.next;
    currentIndex++;
  }

  // link prev node and next node
  const prev = current.prev;
  const next = current.next;

  // delete at head
  if (!prev) {
    current.next = null;
    next.prev = null;
    this.head = next;
    this.length--;
    return;
  }
  // delete at tail
  if (!next) {
    prev.next = null;
    current.prev = null;
    this.length--;
    return;
  }

  prev.next = next;
  next.prev = prev;
  this.length--;
};

const myDoublyLinkedList = new MyDoublyLinkedList();

// add at head
myDoublyLinkedList.addAtHead(20);
myDoublyLinkedList.addAtHead(10);

// add at tail
myDoublyLinkedList.addAtTail(30);
myDoublyLinkedList.addAtTail(50);

// add at index
myDoublyLinkedList.addAtIndex(3, 40);
myDoublyLinkedList.addAtIndex(6, 40);

// get
console.log(myDoublyLinkedList.get(0));
console.log(myDoublyLinkedList.get(3));
console.log(myDoublyLinkedList.get(4));

// delete at index
myDoublyLinkedList.deleteAtIndex(0);
myDoublyLinkedList.deleteAtIndex(1);
myDoublyLinkedList.deleteAtIndex(2);

let current = myDoublyLinkedList.head;
while (current) {
  console.log(current);
  current = current.next;
}
