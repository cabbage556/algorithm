/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  if (!head) {
    return head;
  }

  let current = head;
  if (current.child) {
    // child 노드의 마지막 노드
    const tail = findTail(current.child);

    // 현재 노드의 next 노드
    const nextNode = current.next;

    // 현재 노드의 next를 child 노드로, next의 prev를 현재 노드로 설정하여 이어주기
    current.next = current.child;
    current.next.prev = current;

    // nextNode의 prev 노드를 tail로 변경
    // tail의 next 노드를 nextNode로 변경
    //    child 노드의 마지막 노드와 현재 노드의 다음 노드를 이어주기
    if (nextNode) {
      nextNode.prev = tail;
    }
    tail.next = nextNode;

    current.child = null;
  }

  // next 노드에 대해 재귀 호출
  //    child 노드가 없는 경우 같은 레이어의 next 노드에 대해 호출
  //    child 노드가 있는 경우 child 노드에 대해 호출
  flatten(current.next);

  return head;
};

// 마지막 노드 구하기
//    child 노드의 마지막 노드를 구하기 위해 사용
var findTail = function (node) {
  while (node.next) {
    node = node.next;
  }
  return node;
};
