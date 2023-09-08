/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) {
    return null;
  }

  let current = head;
  while (current) {
    // current의 복사본을 생성해 current의 next 노드로 이어붙이기
    //    node1 - node1Copy - node2 - node2Copy - node3 - node3Copy - ...
    const copy = new Node(current.val, current.next, null);
    current.next = copy;
    current = copy.next;
  }

  current = head;
  while (current) {
    // current 노드의 random 노드가 존재하는 경우
    if (current.random) {
      // copy 노드의 random 노드를 copy 노드로 설정
      current.next.random = current.random.next;
    }
    current = current.next.next;
  }

  // 복사본 head
  const copyHead = head.next;
  let copyCur = copyHead;
  current = head;
  while (current) {
    // current와 copyCur의 next 노드 변경
    //    원본 링크드 리스트와 복사본 링크드 리스트를 분리하기
    //    node1 - node2 - node3 - ...
    //    node1Copy - node2Copy - node3Copy - ...
    current.next = current.next.next;
    copyCur.next = copyCur.next ? copyCur.next.next : null;

    current = current.next;
    copyCur = copyCur.next;
  }

  return copyHead;
};
