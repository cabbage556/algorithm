/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  // 노드가 없거나 노드가 1개거나 k가 0인 경우
  // 회전할 필요가 없으므로 바로 head 노드 리턴
  if (!head || !head.next || !k) {
    return head;
  }

  let length = 1; // 링크드 리스트의 길이
  let current = head;
  while (current.next) {
    length++;
    current = current.next;
  }

  // k를 length로 나눈 나머지만큼만 오른쪽으로 회전
  // 링크드 리스트: 1 - 2 - 3(length: 3)
  // k가 0인 경우: 1 - 2 - 3
  // k가 1인 경우: 3 - 1 - 2
  // k가 2인 경우: 2 - 3 - 1
  // k가 3인 경우: 1 - 2 - 3(k가 0인 경우와 같음)
  // 이후 같은 패턴을 반복하므로 k가 어떤 수든 상관 없이 0, 1, 2 패턴을 반복(length: 3)
  k %= length;
  if (!k) {
    return head;
  }

  current = head;
  let currentIndex = 0;
  // 회전시킬 노드의 이전 노드까지 접근
  while (currentIndex < length - k - 1) {
    currentIndex++;
    current = current.next;
  }

  const nextNode = current.next; // 회전시킬 노드들의 첫 번째 노드
  let tail = current.next; // 회전시킬 노드들의 마지막 노드
  current.next = null; // 회전시킬 노드들과 연결 끊기
  while (tail.next) {
    tail = tail.next;
  }
  // 회전시킬 마지막 노드의 next 노드를 head와 연결 후 head를 회전시킬 첫 번째 노드로 할당
  tail.next = head;
  head = nextNode;

  return head;
};
