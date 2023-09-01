/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let slow = head;
  let fast = head;
  let delay = n;

  // 딜레이만큼 fast 포인터 먼저 이동
  while (delay) {
    fast = fast.next;
    delay--;
  }
  // fast 포인터가 링크드 리스트의 마지막 노드를 벗어난 경우
  //  첫 번째 노드를 삭제하는 경우를 의미함
  if (!fast) {
    // head 노드가 다음 노드를 가리키게 하고 head 노드 리턴
    head = head.next;
    return head;
  }

  // tail 노드까지 fast 포인터를 이동시켜 링크드 리스트 모두 순회
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  // tail 노드까지 fast 포인터를 이동시키면 slow 포인터는 삭제할 노드의 이전 노드를 가리킴
  // 삭제할 노드의 이전 노드가 다다음 노드를 가리키게 하여 링크드 리스트에서 노드 삭제
  slow.next = slow.next ? slow.next.next : slow.next;

  return head;
};
