/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  while (head && head.val === val) {
    head = head.next;
  }
  if (!head) {
    return head;
  }

  let current = head;
  while (current && current.next) {
    const nextNode = current.next;

    // 다음 노드의 값이 val과 같은 경우 현재 노드의 next 노드를 다음 노드의 next 노드로 할당
    if (nextNode.val === val) {
      current.next = nextNode.next;
    }
    // 다음 노드의 값이 val과 같지 않은 경우에만 현재 노드 업데이트
    else {
      current = current.next;
    }
  }

  return head;
};
