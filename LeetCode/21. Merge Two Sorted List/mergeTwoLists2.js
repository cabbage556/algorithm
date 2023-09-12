/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // base case 1
  if (!list1) {
    return list2;
  }
  // base case 2
  if (!list2) {
    return list1;
  }

  // 각 재귀 호출 시 생성되는 더미 head 노드
  const merged = new ListNode(0, null);

  // 재귀 호출
  if (list1.val < list2.val) {
    merged.next = list1;
    merged.next.next = mergeTwoLists(list1.next, list2);
  } else {
    merged.next = list2;
    merged.next.next = mergeTwoLists(list1, list2.next);
  }

  return merged.next;
};

// list1: 1' - 2' - 4'
// list2: 1  - 3  - 4
// mergeTwoLists(1', 1) merged: 0 - 1 - mergeTwoLists(1', 3) return 1 - 1' - 2' - 3 - 4 - 4'
// mergeTwoLists(1', 3) merged: 0 - 1' - mergeTwoLists(2', 3) return 1' - 2' - 3 - 4 - 4'
// mergeTwoLists(2', 3) merged: 0 - 2' - mergeTwoLists(4', 3) return 2' - 3 - 4 - 4'
// mergeTwoLists(4', 3) merged: 0 - 3 - mergeTwoLists(4', 4) return 3 - 4 - 4'
// mergeTwoLists(4', 4) merged: 0 - 4 - mergeTwoLists(4', null) return 4 - 4'
// mergeTwoLists(4', null) return 4'
