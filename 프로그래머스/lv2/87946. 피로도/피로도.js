function getPermutations(arr, selectNumber) {
  const results = [];

  if (selectNumber === 1) {
    return arr.map((el) => [el]);
  }

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];

    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((el) => [fixed, ...el]);

    results.push(...attached);
  });

  return results;
}

function solution(k, dungeons) {
  // k: 유저의 현재 피로도
  // dungeons: 각 던전별 '최소 필요 피로도', '소모 피로도'가 담긴 2차원 배열 [[최소 필요 피로도, 소모 피로도]]
  // return: 유저가 탐험할 수 있는 최대 던전수

  const answer = [];
  let firstK = k;

  const permutations = getPermutations(dungeons, dungeons.length);

  permutations.forEach((permutation) => {
    let temp = 0; // 입장 가능 던전 갯수

    for (let i = 0; i < permutation.length; i++) {
      // [최소 필요 피로도, 소모 피로도]
      const [minRequired, usage] = permutation[i];

      // 현재 던전의 최소 필요 피로도보다 현재 피로도가 작은 경우 입장할 수 없음
      if (firstK < minRequired) {
        break;
      }

      // 입장 가능한 경우 소모 피로도만큼 제거하고 입장 가능 던전 갯수 증가
      firstK -= usage;
      temp++;
    }

    answer.push(temp);
    firstK = k;
  });

  return Math.max(...answer);
}
