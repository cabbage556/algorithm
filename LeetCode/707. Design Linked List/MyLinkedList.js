var Node = function (value) {
  this.value = value;
  this.next = null;
};

var MyLinkedList = function () {
  this.head = null;
  this.length = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  console.log(this.length);
  if (this.length === 0) {
    return -1;
  }
  if (index < 0 || index >= this.length) {
    return -1;
  }

  let currentNode = this.head;
  let currentIndex = 0;
  while (currentIndex < index) {
    currentNode = currentNode.next;
    currentIndex++;
  }

  return currentNode.value;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new Node(val); // initialize the new node
  node.next = this.head; // link the new node with the head
  this.head = node; // assign the new node to head
  this.length++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  if (this.length === 0) {
    this.addAtHead(val);
    return;
  }

  const node = new Node(val); // initialize the new node
  let currentNode = this.head; // track the currentNode

  // traverse linked list until currentNode's next is null
  while (currentNode.next) {
    currentNode = currentNode.next;
  }

  currentNode.next = node;
  this.length++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  // if index is 0, add at head
  if (index === 0) {
    this.addAtHead(val);
    return;
  }
  // if index equals the length of the linked list, add at tail
  if (index === this.length) {
    this.addAtTail(val);
    return;
  }
  // if index is greater than the length, the node will not be inserted
  if (index > this.length) {
    return;
  }

  const node = new Node(val); // initialize the new node
  let currentNode = this.head; // track the currentNode
  let currentIndex = 0;

  // traverse linked list until index - 1
  while (currentIndex < index - 1) {
    currentNode = currentNode.next;
    currentIndex++;
  }

  node.next = currentNode.next; // link the new node with the next node
  currentNode.next = node; // link the current node with the new node
  this.length++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.length) {
    return;
  }

  // if index is 0, delete the head
  if (index === 0) {
    this.head = this.head.next;
    this.length--;
    return;
  }

  // find prev node and the current node
  let prevNode = null;
  let currentNode = this.head;
  let currentIndex = 0;
  while (currentIndex < index) {
    if (currentIndex === index - 1) {
      prevNode = currentNode;
    }
    currentNode = currentNode.next;
    currentIndex++;
  }

  prevNode.next = currentNode.next;

  this.length--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

const linkedList = new MyLinkedList();
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1, 2);
console.log(linkedList.get(1));
linkedList.deleteAtIndex(1);
console.log(linkedList.get(1));
console.log(linkedList.get(3));
console.log(linkedList.deleteAtIndex(3));
console.log(linkedList.deleteAtIndex(0));
console.log(linkedList.get(0));
console.log(linkedList.deleteAtIndex(0));
console.log(linkedList.get(0));
