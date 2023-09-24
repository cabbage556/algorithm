/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  // 메모이제이션 캐시
  const cache = new Map();

  // DFS 재귀 함수
  const explore = function (sum, depth) {
    // 캐시에 결과가 있는지 찾기
    if (cache.has(`${sum},${depth}`)) {
      return cache.get(`${sum},${depth}`);
    }

    // 마지막 깊이에서 DFS의 합이 target과 같으면 1을 리턴
    if (depth === nums.length) {
      if (sum === target) {
        return 1;
      }

      // DFS의 합이 target과 같지 않으면 0을 리턴
      return 0;
    }

    // +, - 결과를 종합하기
    //  +, - 결과를 왼쪽, 오른쪽 노드로 생각할 수 있음(함수 호출 상관 관계를 트리 구조로 생각하기)
    const result =
      explore(sum + nums[depth], depth + 1) +
      explore(sum - nums[depth], depth + 1);

    // 캐시에 결과 저장
    cache.set(`${sum},${depth}`, result);
    return result;
  };

  return explore(0, 0);
};
