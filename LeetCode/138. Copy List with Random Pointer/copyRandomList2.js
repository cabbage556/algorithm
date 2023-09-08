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
  const nodeMap = new Map();
  let current = head;
  while (current) {
    nodeMap.set(current, new Node(current.val, null, null));
    current = current.next;
  }

  current = head;
  while (current) {
    const copy = nodeMap.get(current);
    copy.next = nodeMap.get(current.next) ?? null;
    copy.random = nodeMap.get(current.random) ?? null;
    current = current.next;
  }

  return nodeMap.get(head);
};
