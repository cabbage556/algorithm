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
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }

  let merged = new ListNode(0);
  let current = merged;
  let current1 = list1;
  let current2 = list2;
  while (current1 && current2) {
    if (current1.val < current2.val) {
      current.next = current1;
      current1 = current1.next;
    } else {
      current.next = current2;
      current2 = current2.next;
    }
    current = current.next;
  }

  if (current1) {
    current.next = current1;
    current1 = current1.next;
  }
  if (current2) {
    current.next = current2;
    current2 = current2.next;
  }

  return merged.next;
};

// list1: 1' - 2' - 4'
// list2: 1  - 3  - 4
// merged: 0 - 1 - 1' - 2' - 3 - 4 - 4'

// list1: 1' - 1' - 2'
// list2: 2 - 2 - 2
// merged: 0 - 1' - 1' - 2 - 2 - 2 - 2'
