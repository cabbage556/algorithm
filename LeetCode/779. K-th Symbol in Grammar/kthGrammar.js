/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
  // base case
  if (n === 0) {
    return 0;
  }

  // 그래프를 그려서 해결하기
  //  주어진 k의 부모 k
  //    부모 k = 3
  //    자식 k = 5, 6
  const kParent = Math.ceil(k / 2);
  // 부모 k의 값
  const val = kthGrammar(n - 1, kParent);

  // k가 짝수이면 부모 k의 값을 뒤집음
  return k % 2 === 0 ? !val : val;
};
