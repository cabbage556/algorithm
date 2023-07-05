function solution(land) {
  // land: N행 4열의 2차원 배열
  // return: 마지막 행까지 모두 내려왔을 때 얻을 수 있는 최대값

  // 두 번째 행부터 각 자리에 최선의 데이터를 저장하면서 내려온다.
  for (let i = 1; i < land.length; i++) {
    land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
    land[i][1] += Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
    land[i][2] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][3]);
    land[i][3] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][2]);
  }

  // 마지막 행에서 최대값 계산
  return Math.max(...land[land.length - 1]);
}