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
  const listStack = [head];
  let current = head;
  while (current) {
    // current 노드의 값을 사용해 새로운 ListNode를 생성
    listStack.push(new ListNode(current.val));
    current = current.next;
  }

  // 뒤집기
  head = listStack.pop();
  current = head;
  while (listStack.length > 1) {
    const lastNode = listStack.pop();
    current.next = lastNode; // next 포인터가 lastNode를 가리키게 함
    current = lastNode;
  }

  return head;
};
