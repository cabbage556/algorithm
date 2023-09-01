/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head || !head.next) {
    return null;
  }

  const hashMap = new Map();
  let current = head;
  while (current.next) {
    if (hashMap.get(current)) {
      return current;
    }
    hashMap.set(current, current.val);
    current = current.next;
  }

  return null;
};
