/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  const hashMap = new Map();
  const subtrees = [];
  const traverse = function (root) {
    // left, right 자식 노드가 없으면 "@" 리턴
    if (!root) {
      return "@";
    }

    // 서브트리 직렬화로 키 생성
    //    예를 들어 left, right 자식 노드가 없는 마지막 노드의 값이 4인 경우 -> '4.@.@'
    //    left 자식 노드가 위 노드이고 right 자식 노드가 없는 노드의 값이 2인 경우 -> '2.4.@.@.@'
    const key = `${root.val}.${traverse(root.left)}.${traverse(root.right)}`;

    // 서브트리 갯수 저장
    if (hashMap.has(key)) {
      hashMap.set(key, hashMap.get(key) + 1);
    } else {
      hashMap.set(key, 1);
    }

    // 중복 서브트리가 존재하면 추가
    if (hashMap.get(key) === 2) {
      subtrees.push(root);
    }
    return key;
  };

  traverse(root);
  return subtrees;
};
