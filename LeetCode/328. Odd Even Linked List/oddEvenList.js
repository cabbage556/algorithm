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
  // head 노드가 없거나 head 노드의 다음 노드가 없는 경우
  if (!head || !head.next) {
    return head;
  }

  let oddCurrent = head; // odd 인덱스 노드 포인터
  const evenHead = head.next; // even 인덱스 노드들의 head 노드
  let evenCurrent = head.next; // even 인덱스 노드 포인터
  while (oddCurrent.next && evenCurrent.next) {
    oddCurrent.next = oddCurrent.next.next; // odd 인덱스 노드의 next 노드가 다다음 노드를 가리키게 함
    oddCurrent = oddCurrent.next; // odd 인덱스 노드 포인터 업데이트

    evenCurrent.next = evenCurrent.next.next; // even 인덱스 노드의 next 노드가 다다음 노드를 가리키게 함
    evenCurrent = evenCurrent.next; // even 인덱스 노드 포인터 업데이트
  }
  oddCurrent.next = evenHead; // odd 인덱스 마지막 노드의 next 노드가 even 인덱스 노드들의 head 노드를 가리키게 하여 이어붙이기

  return head;
};
