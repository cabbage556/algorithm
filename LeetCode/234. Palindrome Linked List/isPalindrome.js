/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head.next) {
    return true;
  }

  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // slow points the middle of the list
  // fast points the end of the list

  let prev = slow;
  slow = slow.next; // slow points the next node of the middle node
  prev.next = null; // the middle node becomes the end of the list
  // reverse the back half of the list
  //  points the previous node
  while (slow) {
    const temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  fast = head; // from the start of the list
  slow = prev; // from the end of the list
  // compare the node value
  while (slow) {
    if (fast.val !== slow.val) {
      return false;
    }

    fast = fast.next;
    slow = slow.next;
  }

  return true;
};

// 1 -> 6 -> 4 -> 5 -> 4 -> 6 -> 1
// 1. move slow until it reaches the middle of the list
//    slow: 5
// 2. reverse the back half of the list and change the next node with the previous node
//    1 -> 6 -> 4 -> 5 <- 4 <- 6 <- 1
// 3. compare the node value
//    fast: 1 -> 6 -> 4 -> 5(from the start)
//    slow: 1 -> 6 -> 4 -> 5(from the end)

// 1 -> 2 -> 3 -> 4 -> 4 -> 3 -> 2 -> 1
// 1. slow: 4
// 2. 1 -> 2 -> 3 -> 4 -> 4 <- 3 <- 2 <- 1
// 3. fast: 1 -> 2 -> 3 -> 4
//    slow: 1 -> 2 -> 3 -> 4
