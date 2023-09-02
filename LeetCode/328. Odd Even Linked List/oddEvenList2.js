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
var oddEvenList = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let oddCurrent = head; // odd 인덱스 노드 포인터
  let evenCurrent = head.next; // even 인덱스 노드 포인터
  const evenHead = evenCurrent;
  while (evenCurrent && evenCurrent.next) {
    oddCurrent.next = evenCurrent.next; // odd 인덱스 노드 포인터의 next 노드를 even 인덱스 노드의 next 노드로 가리키게 함
    oddCurrent = oddCurrent.next;

    evenCurrent.next = oddCurrent.next; // even 인덱스 노드 포인터의 next 노드를 odd 인덱스 노드 포인터의 next 노드로 가리키게 함
    evenCurrent = evenCurrent.next;
  }
  oddCurrent.next = evenHead;

  return head;
};
