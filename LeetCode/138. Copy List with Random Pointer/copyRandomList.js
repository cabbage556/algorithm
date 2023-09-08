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
  const map = new Map();
  const copyHead = new Node(0, null, null);
  let copyCur = copyHead;
  let current = head;
  while (current) {
    // current의 복사본 생성
    const copy = new Node(current.val, null, null);

    // oldNode와 newNode 매핑
    map.set(current, copy);

    copyCur.next = copy;
    copyCur = copyCur.next;
    current = current.next;
  }

  // random 노드 업데이트
  current = head;
  copyCur = copyHead.next;
  while (current) {
    // random 노드가 존재하면 생성하지 않고 그대로 할당
    const randomNode = map.get(current.random) ?? null;
    copyCur.random = randomNode;

    copyCur = copyCur.next;
    current = current.next;
  }
  return copyHead.next;
};
