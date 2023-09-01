/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head || !head.next) {
    return head;
  }

  // current 노드의 다음 노드를 head 노드로 이동시켜 뒤집기
  let current = head;
  while (current.next) {
    const nextNode = current.next;
    current.next = nextNode.next; // current 노드가 nextNode의 다음 노드를 가리키게 함
    nextNode.next = head; // nextNode의 다음 노드가 head를 가리키게 함
    head = nextNode; // nextNode를 head 노드로 할당
  }

  return head;
};
