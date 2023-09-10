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
  function reverse(reverseHead, current) {
    // 기저 조건
    if (!current || !current.next) {
      return reverseHead;
    }

    // current 노드의 다음 노드를 head로 보내어 뒤집기
    const nextNode = current.next;
    current.next = nextNode.next;
    nextNode.next = reverseHead;
    reverseHead = nextNode;

    // 뒤집은 링크드 리스트의 head 노드 리턴
    return reverse(reverseHead, current);
  }
  head = reverse(head, head);
  return head;
};
