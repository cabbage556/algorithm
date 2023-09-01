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

  let slow = head;
  let fast = head;
  while (fast && fast.next && fast.next.next) {
    slow = slow.next; // one step
    fast = fast.next.next; // two steps

    // 두 포인터가 가리키는 노드가 같을 때부터
    if (slow === fast) {
      // slow 포인터 head 노드부터 시작
      //    slow, fast 포인터 모두 노드 1개만큼 이동
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }

  return null;
};
