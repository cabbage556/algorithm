/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const add = new ListNode(0);
  let cur = add;
  let cur1 = l1;
  let cur2 = l2;
  let carry = 0;

  while (cur1 || cur2) {
    const val1 = cur1 !== null ? cur1.val : 0;
    const val2 = cur2 !== null ? cur2.val : 0;
    let sum = val1 + val2 + carry;
    carry = sum >= 10 ? 1 : 0;
    sum %= 10;

    cur.next = new ListNode(sum);
    cur = cur.next;
    if (cur1 !== null) {
      cur1 = cur1.next;
    }
    if (cur2 !== null) {
      cur2 = cur2.next;
    }
  }
  if (carry === 1) {
    cur.next = new ListNode(1);
  }

  return add.next;
};
