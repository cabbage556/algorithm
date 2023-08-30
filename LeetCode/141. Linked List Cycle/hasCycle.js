/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // 0 node or single node with no next node in linked list
  if (!head || !head.next) {
    return false;
  }

  let slow = head;
  let fast = head;
  do {
    slow = slow.next; // one step
    fast = fast.next; // one step
    // check null
    if (!fast) {
      return false;
    }
    fast = fast.next; // one step
    // check null
    if (!fast) {
      return false;
    }
  } while (slow !== fast);

  return true;
};
