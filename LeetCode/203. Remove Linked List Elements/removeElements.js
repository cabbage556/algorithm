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
  // head 노드의 값이 val과 같은 경우 head 노드 변경
  while (head && head.val === val) {
    head = head.next;
  }
  // head 노드가 null인 경우
  if (!head) {
    return head;
  }

  let current = head;
  while (current && current.next) {
    let nextNode = current.next;

    // 다음 노드의 값이 val과 같은 경우가 이어져 있는 경우 계속 삭제
    while (nextNode && nextNode.val === val) {
      current.next = nextNode.next;
      nextNode = current.next;
    }

    // 현재 노드 업데이트
    current = current.next;
  }

  return head;
};
